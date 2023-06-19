import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { AdoptionAnimal } from '@domain/AdoptionAnimal/AdoptionAnimal';
import { AdoptionAnimalsRepository } from '@app/repositories/AdoptionAnimals/adoption-animals';

@Injectable()
export class PrismaAdoptionAnimalsRepository
  implements AdoptionAnimalsRepository
{
  constructor(private prismaService: PrismaService) {}

  async create(animal: AdoptionAnimal): Promise<void> {
    await this.prismaService.availableAnimal.create({
      data: {
        ...animal.props,
      },
    });
  }

  async find(): Promise<AdoptionAnimal['props'][]> {
    const adoptionList = await this.prismaService.availableAnimal.findMany();

    if (adoptionList.length < 1) {
      throw new NotFoundException('There are no animals to list');
    }

    return adoptionList;
  }
}
