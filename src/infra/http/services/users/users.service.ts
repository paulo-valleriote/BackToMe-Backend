import { Injectable } from '@nestjs/common';
import { UserRepository } from '@app/repositories/User/user';
import { User } from '@domain/User/User';
import { CpfValidator } from '@app/protocols/cpf/cpfValidator';
import { PhoneValidator } from '@app/protocols/phone/phoneValidator';
import { InvalidParamError } from '@app/errors/InvalidParamError';

interface RegisterUserRequest {
  name: string;
  email: string;
  cpf: string;
  phone: string;
  password: string;
  address: {
    cep: string;
    complement: string;
  };
}

@Injectable()
export class UserService {
  constructor(
    private userRepository: UserRepository,
    private phoneValidator: PhoneValidator,
    private cpfValidator: CpfValidator,
  ) {}

  async register(request: RegisterUserRequest): Promise<User> {
    const newUser = new User(request);

    const cpfIsValid = this.cpfValidator.execute(newUser.props?.cpf as string);
    const phoneIsValid = this.phoneValidator.execute(
      newUser.props?.phone as string,
    );

    if (!cpfIsValid) throw new InvalidParamError('cpf');
    if (!phoneIsValid) throw new InvalidParamError('phone');

    await this.userRepository.register(newUser);
    return newUser;
  }
}
