import { inMemoryUserRepository } from '@test/repositories/in-memory-user-repository';
import { UserService } from './users.service';
import { User } from '@domain/User/User';
import { BadRequestException } from '@nestjs/common';

describe('User', () => {
  class PhoneValidatorMock {
    execute() {
      return 'valid_phone';
    }
  }
  class CpfValidatorMock {
    execute() {
      return true;
    }
  }

  const userRepository = new inMemoryUserRepository();
  const userService = new UserService(
    userRepository,
    new PhoneValidatorMock(),
    new CpfValidatorMock(),
  );

  const makeSud = async () => {
    const newUser = new User({
      name: 'any_name',
      email: 'any_email@mail.com',
      cpf: '11111111111',
      password: 'any_password',
      phone: 'any_phone',
      photo: 'any_photo',
      age: 'any_age',
      address: {
        cep: 'any_cep',
        complement: 'any_complement',
        number: 'any_number'
      },
    });

    if (!newUser.props) {
      throw new Error('Error creating new user');
    }

    const user = await userService.register(newUser.props);

    if (user instanceof Error) {
      throw user;
    }

    return user;
  };

  it('should throw an error when user not be able to sign in', async () => {
    const user = await makeSud();
    const password = 'not_valid';

    try {
      await userRepository.login({
        email: user.props.email,
        password,
      });
    } catch (error: any) {
      expect(error).toBeInstanceOf(BadRequestException);
      expect(error.message).toEqual('E-mail or password are incorrect');
    }
  });

  it('should receive a token when user be able to sign in', async () => {
    const user = await makeSud();
    const { email } = user.props;
    const password = 'any_password';

    const token = await userRepository.login({ email, password });

    expect(token).toBeTruthy();
  });
});
