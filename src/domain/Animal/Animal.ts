import { InvalidParamError } from '@app/errors/InvalidParamError';
import { MissingParamError } from '@app/errors/MissingParamError';

export type AnimalProps = any;

interface NewAnimal {
  body: AnimalProps | Error;
  statusCode: number;
}

export class Animal {
  props?: AnimalProps;
  protected requiredParams: string[];

  constructor() {
    this.requiredParams = [
      'species',
      'race',
      'age',
      'color',
      'size',
      'distinctive_characteristics',
    ];
  }

  handle(httpRequest: AnimalProps): NewAnimal {
    for (const param of this.requiredParams) {
      if (!httpRequest[param]) {
        return {
          body: new MissingParamError(param),
          statusCode: 400,
        };
      }
    }

    if (!this.ageValidator(httpRequest.age)) {
      return {
        body: new InvalidParamError(httpRequest.age),
        statusCode: 400,
      };
    }

    return {
      body: httpRequest,
      statusCode: 200,
    };
  }

  ageValidator(age: string): boolean {
    const validAges = ['Filhote', 'Adulto', 'Idoso'];

    if (!validAges.includes(age)) {
      return false;
    }

    return true;
  }
}
