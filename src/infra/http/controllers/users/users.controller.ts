import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { RegisterUserDTO } from '@infra/http/dtos/User/registerUser.dto';
import { UserService } from '@infra/http/services/users/users.service';

@Controller('users')
export class UsersController {
  constructor(private userSerivce: UserService) {}

  @Post('registered')
  async register(@Body() registerUserDTO: RegisterUserDTO) {
    const newUser = await this.userSerivce.register(registerUserDTO);

    if (!newUser.props) {
      throw new BadRequestException('Erro ao cadastrar usuário');
    }

    return { message: 'Usuário cadastrado com sucesso!' };
  }
}
