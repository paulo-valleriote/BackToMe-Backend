import { PrismaService } from '../prisma.service';
import { FoundAnimal } from '@domain/AnimalFound/FoundAnimal';
import { FoundAnimalsRepository } from '@app/repositories/FoundAnimals/found-animals';
export declare class PrismaFoundAnimalsRepository implements FoundAnimalsRepository {
    private prismaService;
    constructor(prismaService: PrismaService);
    create(animal: FoundAnimal): Promise<void>;
}
