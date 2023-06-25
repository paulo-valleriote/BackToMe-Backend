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
    userId: string;
}
export declare class LostAnimal extends Animal {
    props: LostAnimalProps;
    constructor(animalProps: LostAnimalProps);
}
export {};
