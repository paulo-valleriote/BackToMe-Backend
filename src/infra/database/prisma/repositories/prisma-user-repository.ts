import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { UserRepository } from '@app/repositories/User/user';
import { User } from '@domain/User/User';

@Injectable()
export class PrismaUserRepository implements UserRepository {
  constructor(private prismaService: PrismaService) {}

  async register(user: User): Promise<void> {
    if (user.body instanceof Error || !user.body) {
      throw new Error('Erro ao cadastrar usuário');
    }

    await this.prismaService.user.create({
      data: {
        ...user.body,
      },
    });
  }
}
