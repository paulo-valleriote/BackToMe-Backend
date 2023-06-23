import { AdoptionAnimal } from '@domain/AdoptionAnimal/AdoptionAnimal';
export declare abstract class AdoptionAnimalsRepository {
    abstract create(animal: AdoptionAnimal): Promise<void>;
    abstract find(): Promise<AdoptionAnimal['props'][] | Error>;
}
