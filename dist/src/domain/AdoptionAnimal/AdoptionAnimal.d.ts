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
export declare class AdoptionAnimal extends Animal {
    props: AdoptionAnimalProps;
    constructor(animalProps: AdoptionAnimalProps);
}
export {};
