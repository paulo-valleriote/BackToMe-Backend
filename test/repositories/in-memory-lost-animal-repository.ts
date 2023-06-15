import { LostAnimalsRepository } from '@app/repositories/LostAnimals/lost-animals';
import { LostAnimal } from '@domain/LostAnimal/LostAnimal';

export class inMemoryLostAnimalRepository implements LostAnimalsRepository {
  public lostAnimals: LostAnimal[] = [];

  async create(animal: LostAnimal): Promise<void> {
    this.lostAnimals.push(animal);
  }
}
