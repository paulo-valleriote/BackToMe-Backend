import { InvalidParamError } from '@app/errors/InvalidParamError';
import { MissingParamError } from '@app/errors/MissingParamError';
import { HttpRequest, HttpResponse } from '@app/protocols/http';

interface AnimalProps extends HttpRequest {
  body: {
    specie: string;
    race: string;
    age: string;
    color: string;
    size: string;
    distinctiveCharacteristics: string;
  };
}

export class Animal {
  props?: AnimalProps;

  constructor() {}

  handle(httpRequest: AnimalProps): HttpResponse {
    const requiredParams = [
      'specie',
      'race',
      'age',
      'color',
      'size',
      'distinctiveCharacteristics',
    ];

    for (const param of requiredParams) {
      if (!httpRequest.body[param]) {
        return {
          body: new MissingParamError(param),
          statusCode: 400,
        };
      }
    }

    if (!this.ageValidator(httpRequest.body.age)) {
      return {
        body: new InvalidParamError(httpRequest.body.age),
        statusCode: 400,
      };
    }

    return {
      body: httpRequest.body,
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
