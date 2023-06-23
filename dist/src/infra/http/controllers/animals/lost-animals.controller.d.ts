import { RegisterLostAnimalDTO } from '@infra/http/dtos/LostAnimal/registerLostAnimal.dto';
import { LostAnimalService } from '@infra/http/services/animals/LostAnimals/lost-animals.service';
export declare class LostAnimalsController {
    private lostAnimalsSerivce;
    constructor(lostAnimalsSerivce: LostAnimalService);
    register(registerLostAnimalDTO: RegisterLostAnimalDTO): Promise<import("../../../../domain/LostAnimal/LostAnimal").LostAnimal>;
    find(): Promise<{
        [x: string]: any;
        species: string;
        race: string;
        age: string;
        color: string;
        size: string;
        distinctive_characteristics: string;
        date_loss: string;
        location_loss: string;
        userId: string;
    }[]>;
}
