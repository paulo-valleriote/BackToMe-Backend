import { PasswordRecoveryMailDTO } from '@infra/http/dtos/User/passwordRecovery.dto';
import { MailerService } from '@nestjs-modules/mailer';
import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';

@Processor('mail')
export class MailProcessorService {
  constructor(private mailService: MailerService) {}
  @Process('mail-job')
  sendMailJob(job: Job<PasswordRecoveryMailDTO>) {
    this.mailService
      .sendMail({
        headers: {},
        to: job.data.email,
        from: '<paulovalleriotedev@gmail.com>',
        subject: 'Redefinição de senha',
        html: `Olá! Nós sentimos sua falta, <a href={${job.data.recoveryLink}} clique aqui</a> para redefinir sua senha\n\nBem vindo(a) de volta!`,
      })
      .then(() => console.log('Email enviado para: ', job.data.email))
      .catch((err) => console.log(err));
  }
}
