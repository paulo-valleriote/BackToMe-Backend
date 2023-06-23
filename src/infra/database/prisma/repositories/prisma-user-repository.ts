import { sign } from 'jsonwebtoken';
import { PrismaService } from '../prisma.service';
import { User } from '@domain/User/User';
import { BadRequestException, Injectable } from '@nestjs/common';
import { UserRepository } from '@app/repositories/User/user';
import { UserLoginDTO } from '@infra/http/dtos/User/login.dto';
import { compareToEncrypted } from '@app/protocols/crypto/compare/compareToEncrypted';
import { EditUserDTO } from '@infra/http/dtos/User/editUser.dto';

@Injectable()
export class PrismaUserRepository implements UserRepository {
  constructor(private prismaService: PrismaService) {}

  async register(user: User): Promise<void> {
    if (user.props instanceof Error || !user.props) {
      throw new BadRequestException('Erro ao cadastrar usuário');
    }
    const { address, ...userProps } = user.props;

    const { id } = await this.prismaService.user.create({
      data: {
        ...userProps,
      },
      select: {
        id: true,
      },
    });

    if (address?.cep && address.complement) {
      await this.prismaService.address.create({
        data: {
          ...address,
          id,
        },
      });
    }
  }

  async login(account: UserLoginDTO): Promise<string | Error> {
    const databaseStored = await this.prismaService.user.findUnique({
      where: { email: account.email },
    });

    if (
      !databaseStored?.password ||
      !compareToEncrypted({
        receivedString: account.password,
        encryptedString: databaseStored.password,
      })
    ) {
      return new BadRequestException('E-mail or password are incorrect');
    }

    return sign({ id: databaseStored.id }, process.env.JWT_SECRET as string);
  }

  async edit(userId: string, account: EditUserDTO): Promise<void | Error> {
    if (!userId) {
      throw new BadRequestException('Invalid user identification');
    }

    this.prismaService.user.update({
      data: {
        name: account.name,
        email: account.email,
        password: account.password,
        phone: account.phone,
        cpf: account.cpf,
        address: {
          update: {
            cep: account.address?.cep,
            complement: account.address?.complement,
          },
        },
      },
      where: {
        id: userId,
      },
    });
  }
}
