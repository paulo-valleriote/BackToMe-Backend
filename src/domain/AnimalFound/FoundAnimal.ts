import { Animal, AnimalProps } from '@domain/Animal/Animal';

interface FoundAnimalProps extends AnimalProps {
  species: string;
  race: string;
  age: string;
  color: string;
  size: string;
  distinctive_characteristics: string;
  photo: string;
  found_location: string;
  userId: string;
}

export class FoundAnimal extends Animal {
  props: FoundAnimalProps;

  constructor(animalProps: FoundAnimalProps) {
    super();

    this.requiredParams.push('photo', 'found_location', 'userId');

    const newAnimal = this.handle(animalProps);

    if (newAnimal.body instanceof Error) {
      throw newAnimal.body;
    }

    this.props = newAnimal.body;
  }
}
