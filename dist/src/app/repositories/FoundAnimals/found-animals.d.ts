import { FoundAnimal } from '@domain/AnimalFound/FoundAnimal';
export declare abstract class FoundAnimalsRepository {
    abstract create(animal: FoundAnimal): Promise<void>;
}
