import { LostAnimal } from '@domain/LostAnimal/LostAnimal';
export declare abstract class LostAnimalsRepository {
    abstract create(animal: LostAnimal): Promise<void>;
    abstract find(): Promise<LostAnimal['props'][] | Error>;
}
