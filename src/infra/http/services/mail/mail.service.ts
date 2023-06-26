import { PasswordRecoveryMailDTO } from '@infra/http/dtos/User/passwordRecovery.dto';
import { MailerService } from '@nestjs-modules/mailer';
import {
  OnQueueCompleted,
  OnQueueError,
  Process,
  Processor,
} from '@nestjs/bull';
import { Job } from 'bull';
import env from 'src/env';

@Processor('mail')
export class MailProcessorService {
  constructor(private mailService: MailerService) {}
  @Process('mail-job')
  sendMailJob(job: Job<PasswordRecoveryMailDTO>) {
    this.mailService.sendMail({
      to: job.data.email,
      from: env.MAILER_SENDER,
      subject: 'Redefinição de senha',
      html: `Olá! Nós sentimos sua falta, <a href={${job.data.recoveryLink}} clique aqui</a> para redefinir sua senha\n\nBem vindo(a) de volta!`,
    });
  }

  @OnQueueCompleted()
  logCompletedQueue(job: Job) {
    console.log('E-mail foi enviado!', job.data.email);
  }

  @OnQueueError()
  logQueueError(job: Job) {
    console.log('O E-mail não pode ser enviado, motivo:', job.failedReason);
  }
}
