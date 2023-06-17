import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { UserRepository } from '@app/repositories/User/user';
import { User } from '@domain/User/User';
import { UserLoginDTO } from '@infra/http/dtos/User/login.dto';
import { compareToEncrypted } from '@app/protocols/crypto/compare/compareToEncrypted';
import { sign } from 'jsonwebtoken';

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

    await this.prismaService.address.create({
      data: {
        ...address,
        id,
      },
    });
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
}
