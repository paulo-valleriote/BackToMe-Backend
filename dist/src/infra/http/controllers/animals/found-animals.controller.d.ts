import { RegisterFoundAnimalDTO } from '@infra/http/dtos/FoundAnimal/registerFoundAnimal.dto';
import { FoundAnimalService } from '@infra/http/services/animals/FoundAnimals/found-animals.service';
export declare class FoundAnimalsController {
    private foundAnimalSerivce;
    constructor(foundAnimalSerivce: FoundAnimalService);
    register(registerFoundAnimalDTO: RegisterFoundAnimalDTO): Promise<void>;
}
