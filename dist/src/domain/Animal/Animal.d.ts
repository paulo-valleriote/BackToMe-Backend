import { z } from 'zod';
export type AnimalProps = any;
interface NewAnimal {
    body: AnimalProps | Error;
    statusCode: number;
}
export declare class Animal {
    props?: AnimalProps;
    protected propsValidationSchema: z.ZodObject<any>;
    constructor(propsValidationSchema: z.ZodObject<any>);
    handle(httpRequest: AnimalProps): NewAnimal;
    ageValidator(age: string): boolean;
}
export {};
