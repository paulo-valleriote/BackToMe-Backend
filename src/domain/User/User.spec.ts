import { MissingParamError } from '@app/errors/MissingParamError';
import { HttpRequest } from '@app/protocols/http';
import { User } from './User';

describe('User', () => {
  const makeSut = (props: HttpRequest) => {
    const newUser = new User(props.body);

    return newUser;
  };

  it('should return 400 if none name is provided', () => {
    const httpRequest = {
      body: {
        email: 'any_email@mail.com',
        cpf: '11111111111',
        phone: '11 11111-1111',
        password: 'any_password',
      },
    };

    expect(() => makeSut(httpRequest)).toThrow(new MissingParamError('name'));
  });

  it('should return 400 if none email is provided', () => {
    const httpRequest = {
      body: {
        name: 'any_name',
        cpf: '11111111111',
        phone: '11 11111-1111',
        password: 'any_password',
      },
    };

    expect(() => makeSut(httpRequest)).toThrow(new MissingParamError('email'));
  });

  it('should return 400 if none cpf is provided', () => {
    const httpRequest = {
      body: {
        name: 'any_name',
        email: 'any_email@mail.com',
        phone: '11 11111-1111',
        password: 'any_password',
      },
    };

    expect(() => makeSut(httpRequest)).toThrow(new MissingParamError('cpf'));
  });

  it('should return 400 if none phone is provided', () => {
    const httpRequest = {
      body: {
        name: 'any_name',
        email: 'any_email@mail.com',
        cpf: '11111111111',
        password: 'any_password',
      },
    };

    expect(() => makeSut(httpRequest)).toThrow(new MissingParamError('phone'));
  });

  it('should return 400 if none password is provided', () => {
    const httpRequest = {
      body: {
        name: 'any_name',
        email: 'any_email@mail.com',
        cpf: '11111111111',
        phone: '11 11111-1111',
      },
    };

    expect(() => makeSut(httpRequest)).toThrow(
      new MissingParamError('password'),
    );
  });

  it('should return 200 if new user was created', () => {
    const httpRequest = {
      body: {
        name: 'any_name',
        email: 'any_email@mail.com',
        cpf: '11111111111',
        phone: '11 11111-1111',
        password: 'any_password',
      },
    };
    const newUser = makeSut(httpRequest);

    expect(newUser.props).toEqual(httpRequest.body);
  });
});
