import { Body, Controller, Get } from '@nestjs/common';
import { RegisterUserDTO } from '@infra/http/dtos/User/registerUser.dto';
import { UserService } from '@infra/http/services/users/users.service';
import { response } from 'express';

@Controller('/users')
export class UsersController {
  constructor(private userSerivce: UserService) {}

  @Get('/registered')
  async register(@Body() registerUserDTO: RegisterUserDTO) {
    const newUser = await this.userSerivce.register(registerUserDTO);

    if (!newUser.props) {
      return response
        .status(400)
        .json({ message: 'Erro ao cadastrar usuário' });
    }

    return response
      .status(200)
      .json({ message: 'Usuário cadastrado com sucesso!' });
  }
}
