import { RegisterAdoptionAnimalDTO } from '@infra/http/dtos/AdoptionAnimal/registerAdoptionAnimal.dto';
import { AdoptionAnimalsService } from '@infra/http/services/animals/AdoptionAnimals/adoption-animals.service';
export declare class AdoptionAnimalsController {
    private adoptionAnimalSerivce;
    constructor(adoptionAnimalSerivce: AdoptionAnimalsService);
    register(registerAdoptionAnimalDTO: RegisterAdoptionAnimalDTO): Promise<void>;
    find(): Promise<{
        [x: string]: any;
        species: string;
        race: string;
        age: string;
        color: string;
        size: string;
        distinctive_characteristics: string;
        personality_description: string;
        userId: string;
    }[]>;
}
