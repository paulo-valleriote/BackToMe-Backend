import { LostAnimalsRepository } from '@app/repositories/LostAnimals/lost-animals';
import { LostAnimal } from '@domain/LostAnimal/LostAnimal';
import { Injectable } from '@nestjs/common';

interface RegisterLostAnimalRequest {
  species: string;
  race: string;
  age: string;
  color: string;
  size: string;
  distinctive_characteristics: string;
  date_loss: string;
  location_loss: string;
  user_id: string;
}

@Injectable()
export class LostAnimalService {
  constructor(private lostAnimalRepository: LostAnimalsRepository) {}

  async register(request: RegisterLostAnimalRequest): Promise<LostAnimal> {
    const newAnimal = new LostAnimal(request);

    await this.lostAnimalRepository.create(newAnimal);

    return newAnimal;
  }
}
