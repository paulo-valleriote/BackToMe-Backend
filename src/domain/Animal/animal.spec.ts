import { MissingParamError } from '@app/errors/MissingParamError';
import { Animal } from './Animal';
import { InvalidParamError } from '@app/errors/InvalidParamError';
import { HttpRequest } from '@app/protocols/http';

describe('Animal Class', () => {
  const makeSut = (props: HttpRequest) => {
    const newAnimal = new Animal();

    return newAnimal.handle(props.body);
  };

  it('should return 400 if no specie is provided', () => {
    const httpRequest = {
      body: {
        race: 'any_race',
        age: 'any_age',
        color: 'any_color',
        size: 'any_size',
        distinctive_characteristics: 'any_characteristic',
      },
    };

    const httpResponse = makeSut(httpRequest);

    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new MissingParamError('species'));
  });

  it('should return 400 if no race is provided', () => {
    const httpRequest = {
      body: {
        species: 'any_specie',
        age: 'any_age',
        color: 'any_color',
        size: 'any_size',
        distinctive_characteristics: 'any_characteristic',
      },
    };

    const httpResponse = makeSut(httpRequest);

    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new MissingParamError('race'));
  });

  it('should return 400 if a invalid age is provided', () => {
    const httpRequest = {
      body: {
        species: 'any_specie',
        race: 'any_race',
        age: 'invalid_age',
        color: 'any_color',
        size: 'any_size',
        distinctive_characteristics: 'any_characteristic',
      },
    };

    const httpResponse = makeSut(httpRequest);

    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(
      new InvalidParamError(httpRequest.body.age),
    );
  });

  it('should return 400 if no age is provided', () => {
    const httpRequest = {
      body: {
        species: 'any_specie',
        race: 'any_race',
        color: 'any_color',
        size: 'any_size',
        distinctive_characteristics: 'any_characteristic',
      },
    };

    const httpResponse = makeSut(httpRequest);

    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new MissingParamError('age'));
  });

  it('should return 400 if no color is provided', () => {
    const httpRequest = {
      body: {
        species: 'any_specie',
        race: 'any_race',
        age: 'any_age',
        size: 'any_size',
        distinctive_characteristics: 'any_characteristic',
      },
    };

    const httpResponse = makeSut(httpRequest);

    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new MissingParamError('color'));
  });

  it('should return 400 if no size is provided', () => {
    const httpRequest = {
      body: {
        species: 'any_specie',
        race: 'any_race',
        age: 'any_age',
        color: 'any_color',
        distinctive_characteristics: 'any_characteristic',
      },
    };

    const httpResponse = makeSut(httpRequest);

    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new MissingParamError('size'));
  });

  it('should return 400 if no distinctive characteristic is provided', () => {
    const httpRequest = {
      body: {
        species: 'any_specie',
        race: 'any_race',
        age: 'any_age',
        color: 'any_color',
        size: 'any_size',
      },
    };

    const httpResponse = makeSut(httpRequest);

    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(
      new MissingParamError('distinctive_characteristics'),
    );
  });
});
