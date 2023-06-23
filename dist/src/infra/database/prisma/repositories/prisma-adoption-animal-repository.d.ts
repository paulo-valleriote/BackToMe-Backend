import { PrismaService } from '../prisma.service';
import { AdoptionAnimal } from '@domain/AdoptionAnimal/AdoptionAnimal';
import { AdoptionAnimalsRepository } from '@app/repositories/AdoptionAnimals/adoption-animals';
export declare class PrismaAdoptionAnimalsRepository implements AdoptionAnimalsRepository {
    private prismaService;
    constructor(prismaService: PrismaService);
    create(animal: AdoptionAnimal): Promise<void>;
    find(): Promise<AdoptionAnimal['props'][]>;
}
