import { LostAnimalsRepository } from '@app/repositories/LostAnimals/lost-animals';
import { LostAnimal } from '@domain/LostAnimal/LostAnimal';
import { RegisterLostAnimalDTO } from '@infra/http/dtos/LostAnimal/registerLostAnimal.dto';
export declare class LostAnimalService {
    private lostAnimalRepository;
    constructor(lostAnimalRepository: LostAnimalsRepository);
    register(request: RegisterLostAnimalDTO): Promise<LostAnimal>;
    find(): Promise<LostAnimal['props'][] | Error>;
}
