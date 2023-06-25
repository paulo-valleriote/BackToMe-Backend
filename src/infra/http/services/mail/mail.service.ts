import { PasswordRecoveryMailDTO } from '@infra/http/dtos/User/passwordRecovery.dto';
import { MailerService } from '@nestjs-modules/mailer';
import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';

@Processor('mail')
export class MailProcessorService {
  constructor(private mailService: MailerService) {}
  @Process('mail-job')
  sendMailJob(job: Job<PasswordRecoveryMailDTO>) {
    this.mailService.sendMail({
      to: job.data.email,
      from: 'Equipe BackToMe',
      subject: 'Redefinição de senha',
      text: `Olá! Nós sentimos sua falta, clique no link abaixo para recuperar sua senha:\n${job.data.recoveryLink}\n\nBem vindo(a) de volta!`,
    });
  }
}
