import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { PasswordRecoveryDTO } from '@infra/http/dtos/User/passwordRecovery.dto';
import { InvalidParamError } from '@app/errors/InvalidParamError';
import { MissingParamError } from '@app/errors/MissingParamError';
import { z } from 'zod';
import { UserRepository } from '@app/repositories/User/user';
import env from 'src/env';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';

@Controller()
export class MailController {
  constructor(
    private userRepository: UserRepository,
    @InjectQueue('mail') private emailQueue: Queue,
  ) {}

  @Post('users/recoverypassword')
  @HttpCode(204)
  async sendMail(
    @Body() PasswordRecoveryDto: PasswordRecoveryDTO,
  ): Promise<void> {
    const bodySchema = z.object({
      email: z.string().email({ message: 'E-mail' }),
      cpf: z.string(),
    });

    const requestBody = bodySchema.safeParse(PasswordRecoveryDto);

    if (!requestBody.success) {
      if (requestBody.error.message === 'E-mail') {
        throw new InvalidParamError('E-mail');
      }

      throw new MissingParamError(`${requestBody.error.errors[0].path[0]}`);
    }

    const userId = await this.userRepository.findByEmail(
      requestBody.data.email,
    );
    const recoveryLink = `${env.FRONTEND_URL}/${userId}`;
    this.emailQueue.add('mail-job', {
      email: requestBody.data.email,
      recoveryLink,
    });
  }
}
