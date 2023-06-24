import {  Body, Controller, Param, Patch, Post, Put } from '@nestjs/common';
import { RegisterUserDTO } from '@infra/http/dtos/User/registerUser.dto';
import { UserService } from '@infra/http/services/users/users.service';
import { UserLoginDTO } from '@infra/http/dtos/User/login.dto';
import { EditUserDTO } from '@infra/http/dtos/User/editUser.dto';
import { EditPasswordDTO } from '@infra/http/dtos/User/editPassword.dto';
@Controller('users')
export class UsersController {
  constructor(private userService: UserService) {}

  @Post('registered')
  async register(@Body() registerUserDTO: RegisterUserDTO) {
    await this.userService.register(registerUserDTO);

    return { message: 'Usuário cadastrado com sucesso!' };
  }

  @Post('login')
  async login(@Body() userLoginDTO: UserLoginDTO) {
    const token = await this.userService.login(userLoginDTO);

    return token;
  }

  @Put(':id')
  async edit(@Body() editUserDTO: EditUserDTO, @Param('id') id: string) {
    await this.userService.edit(id, editUserDTO);
  }

  @Patch(':id/password')
  async editPassword(
    @Param() id: string,
    @Body() request: EditPasswordDTO,
  ): Promise<any> {
    await this.userService.editPassword(id,request)
  }
}
