import { LostAnimalsRepository } from '@app/repositories/LostAnimals/lost-animals';
import { PrismaService } from '../prisma.service';
import { LostAnimal } from '@domain/LostAnimal/LostAnimal';
export declare class PrismaLostAnimalsRepository implements LostAnimalsRepository {
    private prismaService;
    constructor(prismaService: PrismaService);
    create(animal: LostAnimal): Promise<void>;
    find(): Promise<LostAnimal['props'][]>;
}
