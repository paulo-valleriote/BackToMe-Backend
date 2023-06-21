import { MissingParamError } from '@app/errors/MissingParamError';
import { HttpRequest } from '@app/protocols/http';
import { User } from './User';

describe('User', () => {
  const makeSut = (props: HttpRequest) => {
    const newUser = new User(props.body);

    return newUser;
  };

  it('should throw missing error param if none name is provided', () => {
    const httpRequest = {
      body: {
        email: 'any_email@mail.com',
        cpf: '11111111111',
        phone: '11 11111-1111',
        password: 'any_password',
        address: {
          cep: 'any_cep',
          complement: 'any_complement',
        },
      },
    };

    expect(() => makeSut(httpRequest)).toThrow(new MissingParamError('name'));
  });

  it('should throw missing error param if none email is provided', () => {
    const httpRequest = {
      body: {
        name: 'any_name',
        cpf: '11111111111',
        phone: '11 11111-1111',
        password: 'any_password',
        address: {
          cep: 'any_cep',
          complement: 'any_complement',
        },
      },
    };

    expect(() => makeSut(httpRequest)).toThrow(new MissingParamError('email'));
  });

  it('should throw missing error param if none cpf is provided', () => {
    const httpRequest = {
      body: {
        name: 'any_name',
        email: 'any_email@mail.com',
        phone: '11 11111-1111',
        password: 'any_password',
        address: {
          cep: 'any_cep',
          complement: 'any_complement',
        },
      },
    };

    expect(() => makeSut(httpRequest)).toThrow(new MissingParamError('cpf'));
  });

  it('should throw missing error param if none phone is provided', () => {
    const httpRequest = {
      body: {
        name: 'any_name',
        email: 'any_email@mail.com',
        cpf: '11111111111',
        password: 'any_password',
        address: {
          cep: 'any_cep',
          complement: 'any_complement',
        },
      },
    };

    expect(() => makeSut(httpRequest)).toThrow(new MissingParamError('phone'));
  });

  it('should throw missing error param if none password is provided', () => {
    const httpRequest = {
      body: {
        name: 'any_name',
        email: 'any_email@mail.com',
        cpf: '11111111111',
        phone: '11 11111-1111',
        address: {
          cep: 'any_cep',
          complement: 'any_complement',
        },
      },
    };

    expect(() => makeSut(httpRequest)).toThrow(
      new MissingParamError('password'),
    );
  });

  it('should return an new user if request is valid', () => {
    const httpRequest = {
      body: {
        name: 'any_name',
        email: 'any_email@mail.com',
        cpf: '11111111111',
        phone: '11 11111-1111',
        password: 'any_password',
        address: {
          cep: 'any_cep',
          complement: 'any_complement',
        },
      },
    };
    const newUser = makeSut(httpRequest);

    if (!newUser.props) throw new Error('Error creating new user');

    expect(Object.values(newUser.props)).toBeTruthy();
  });
});
