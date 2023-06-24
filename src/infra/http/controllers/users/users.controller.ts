import {
  BadRequestException,
  Body,
  Controller,
  InternalServerErrorException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { RegisterUserDTO } from '@infra/http/dtos/User/registerUser.dto';
import { UserService } from '@infra/http/services/users/users.service';
import { UserLoginDTO } from '@infra/http/dtos/User/login.dto';
import { EditUserDTO } from '@infra/http/dtos/User/editUser.dto';
import { MissingParamError } from '@app/errors/MissingParamError';
import { PasswordRecoveryDTO } from '@infra/http/dtos/User/passwordRecovery.dto';

@Controller('users')
export class UsersController {
  constructor(private userService: UserService) {}

  @Post('registered')
  async register(@Body() registerUserDTO: RegisterUserDTO) {
    const id = await this.userService.register(registerUserDTO);

    if (id instanceof Error) throw new BadRequestException(id.message);

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

  @Post('validate/email')
  async validateEmail(@Body() email: string) {
    if (!email) {
      throw new MissingParamError('email');
    }

    const emailIsValid = await this.userService.validateEmail(email);

    return { email: emailIsValid };
  }

  @Post('recoverypassword')
  async passwordRecovery(@Body() passwordRecoveryDTO: PasswordRecoveryDTO) {
    const verificationLink = await this.userService.passwordRecovery(
      passwordRecoveryDTO,
    );

    if (!verificationLink) {
      throw new InternalServerErrorException(
        'Ocorreu um erro ao recuperar sua senha',
      );
    }

    return { link: verificationLink };
  }
}
