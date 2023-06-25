import { FoundAnimalsRepository } from '@app/repositories/FoundAnimals/found-animals';
import { RegisterFoundAnimalDTO } from '@infra/http/dtos/FoundAnimal/registerFoundAnimal.dto';
export declare class FoundAnimalService {
    private foundAnimalsRepository;
    constructor(foundAnimalsRepository: FoundAnimalsRepository);
    register(request: RegisterFoundAnimalDTO): Promise<void>;
}
