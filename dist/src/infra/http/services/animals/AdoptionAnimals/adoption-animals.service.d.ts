import { AdoptionAnimalsRepository } from '@app/repositories/AdoptionAnimals/adoption-animals';
import { AdoptionAnimal } from '@domain/AdoptionAnimal/AdoptionAnimal';
import { RegisterAdoptionAnimalDTO } from '@infra/http/dtos/AdoptionAnimal/registerAdoptionAnimal.dto';
export declare class AdoptionAnimalsService {
    private adoptionAnimalsRepository;
    constructor(adoptionAnimalsRepository: AdoptionAnimalsRepository);
    register(request: RegisterAdoptionAnimalDTO): Promise<void>;
    list(): Promise<AdoptionAnimal['props'][]>;
}
