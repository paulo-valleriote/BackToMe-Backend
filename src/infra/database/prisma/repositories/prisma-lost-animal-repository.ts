import { LostAnimalsRepository } from '@app/repositories/LostAnimals/lost-animals';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { LostAnimal } from '@domain/LostAnimal/LostAnimal';

@Injectable()
export class PrismaLostAnimalsRepository implements LostAnimalsRepository {
  constructor(private prismaService: PrismaService) {}

  async create(animal: LostAnimal): Promise<void> {
    await this.prismaService.lostAnimal.create({
      data: {
        ...animal.props,
      },
    });
  }
}
