import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { UserRepository } from '@app/repositories/User/user';
import { User } from '@domain/User/User';

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
}
