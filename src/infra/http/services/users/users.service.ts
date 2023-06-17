import { BadRequestException, Injectable } from '@nestjs/common';
import { UserRepository } from '@app/repositories/User/user';
import { User } from '@domain/User/User';
import { CpfValidator } from '@app/protocols/cpf/cpfValidator';
import { PhoneValidator } from '@app/protocols/phone/phoneValidator';
import { InvalidParamError } from '@app/errors/InvalidParamError';
import { UserLoginDTO } from '@infra/http/dtos/User/login.dto';
import { z } from 'zod';

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

  async login(request: UserLoginDTO): Promise<string | Error> {
    const requestSchema = z.object({
      email: z.string().email().min(6, { message: 'Invalid' }),
      password: z.string(),
    });

    const loginProps = requestSchema.safeParse(request);

    if (!loginProps.success) {
      throw new BadRequestException('User login error', {
        cause: new BadRequestException(),
        description: loginProps.error.errors[0].message,
      });
    }

    const userLoginResponse = await this.userRepository.login(loginProps.data);

    if (userLoginResponse instanceof BadRequestException) {
      throw userLoginResponse;
    }

    return userLoginResponse;
  }
}
