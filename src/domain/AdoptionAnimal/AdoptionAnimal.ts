import { Animal, AnimalProps } from '@domain/Animal/Animal';

interface AdoptionAnimalProps extends AnimalProps {
  species: string;
  race: string;
  age: string;
  color: string;
  size: string;
  distinctive_characteristics: string;
  personality_description: string;
  userId: string;
}

export class AdoptionAnimal extends Animal {
  props: AdoptionAnimalProps;

  constructor(animalProps: AdoptionAnimalProps) {
    super();

    this.requiredParams.push('userId', 'personality_description');

    const newAnimal = this.handle(animalProps);

    if (newAnimal.body instanceof Error) {
      throw newAnimal.body;
    }

    this.props = newAnimal.body;
  }
}
