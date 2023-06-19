import { Body, Controller, Param, Post, Put } from '@nestjs/common';
import { RegisterUserDTO } from '@infra/http/dtos/User/registerUser.dto';
import { UserService } from '@infra/http/services/users/users.service';
import { UserLoginDTO } from '@infra/http/dtos/User/login.dto';
import { EditUserDTO } from '@infra/http/dtos/User/editUser.dto';

@Controller('users')
export class UsersController {
  constructor(private userSerivce: UserService) {}

  @Post('registered')
  async register(@Body() registerUserDTO: RegisterUserDTO) {
    await this.userSerivce.register(registerUserDTO);

    return { message: 'Usuário cadastrado com sucesso!' };
  }

  @Post('login')
  async login(@Body() userLoginDTO: UserLoginDTO) {
    const token = await this.userSerivce.login(userLoginDTO);

    return token;
  }

  @Put(':id')
  async edit(@Body() editUserDTO: EditUserDTO, @Param('id') id: string) {
    await this.userSerivce.edit(id, editUserDTO);
  }
}
