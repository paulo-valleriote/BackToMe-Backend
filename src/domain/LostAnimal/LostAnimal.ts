import { Animal, AnimalProps } from '@domain/Animal/Animal';

interface LostAnimalProps extends AnimalProps {
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

export class LostAnimal extends Animal {
  props: LostAnimalProps;

  constructor(animalProps: LostAnimalProps) {
    super();

    this.requiredParams.push('date_loss', 'location_loss', 'user_id');

    const newAnimal = this.handle(animalProps);

    if (newAnimal.body instanceof Error) {
      throw newAnimal.body;
    }

    this.props = newAnimal.body;
  }
}
