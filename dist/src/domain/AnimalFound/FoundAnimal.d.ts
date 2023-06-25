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
export declare class FoundAnimal extends Animal {
    props: FoundAnimalProps;
    constructor(animalProps: FoundAnimalProps);
}
export {};
