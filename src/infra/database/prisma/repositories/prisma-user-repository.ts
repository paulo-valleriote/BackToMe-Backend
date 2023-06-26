import { sign } from 'jsonwebtoken';
import { PrismaService } from '../prisma.service';
import { User } from '@domain/User/User';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { UserRepository } from '@app/repositories/User/user';
import { UserLoginDTO } from '@infra/http/dtos/User/login.dto';
import { compareToEncrypted } from '@app/protocols/crypto/compare/compareToEncrypted';
import { EditUserDTO } from '@infra/http/dtos/User/editUser.dto';
<<<<<<< HEAD
import { FindedUserDTO } from '@infra/http/dtos/User/findedUser.dto';
import { makeHash } from '@app/protocols/crypto/hash/makeHash';
=======
>>>>>>> dfc469b (refatorando rotas do usuário)
import { FindedUserDTO } from '@infra/http/dtos/User/findedUser.dto';
import { makeHash } from '@app/protocols/crypto/hash/makeHash';

@Injectable()
export class PrismaUserRepository implements UserRepository {
  constructor(private prismaService: PrismaService) {}

  async register(user: User): Promise<string> {
    if (user instanceof Error) {
      throw new BadRequestException(user.message, {
        cause: user,
        description: user.stack,
      });
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

    return id;
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
      return new BadRequestException('Email ou senha estão incorretos');
    }

    return sign({ id: databaseStored.id }, process.env.JWT_SECRET as string);
  }

  async edit(userId: string, account: EditUserDTO): Promise<void | Error> {
    if (!userId) {
      throw new BadRequestException('Identificação inválida');
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

  async findUserById(id: string): Promise<any> {
    const user = await this.prismaService.user.findFirst({
      where: { id },
    });

    if (!user) throw new BadRequestException('Usuário não encontrado');

    return user;
  }

  async updatePassword(id: string, newPassword: string): Promise<boolean> {
    const encryptedPassword = makeHash(newPassword);

    const userUpdated = await this.prismaService.user.update({
      where: { id },
      data: { password: encryptedPassword },
    });

    if (!userUpdated) return false;
    return true;
  }

<<<<<<< HEAD
<<<<<<< HEAD
  async findByEmail(email: string): Promise<FindedUserDTO | NotFoundException> {
=======
  async findByEmail(email: string): Promise<FindedUserDTO> {
>>>>>>> 991a79d (merge)
=======
  async findByEmail(email: string): Promise<FindedUserDTO | NotFoundException> {
>>>>>>> dfc469b (refatorando rotas do usuário)
    const databaseResponse = await this.prismaService.user.findUnique({
      where: {
        email,
      },
    });

    if (!databaseResponse || Object.values(databaseResponse).length < 1) {
      return new NotFoundException('Nenhum usuário encontrado');
    }

    return databaseResponse;
  }
}
