import { DatabaseModule } from '@infra/database/database.module';
import { MessageController } from 'src/app.controler';
import { HttpModule } from '@infra/http/http.module';
import { MailerModule } from '@nestjs-modules/mailer';
import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import env from './env';
import { MailModule } from '@infra/http/controllers/mail/mail.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    BullModule.forRootAsync({
      useFactory: () => ({
        redis: {
          host: env.QUEUE_HOST,
          port: Number(env.QUEUE_PORT),
          username: env.QUEUE_USER,
          password: env.QUEUE_PASSWORD,
          tls: {
            rejectUnauthorized: true,
          },
        },
      }),
    }),
    MailerModule.forRootAsync({
      useFactory: () => ({
        defaults: {
          from: 'Equipe BackToMe',
        },
        catch: (err) => console.log(err),
        finally: () => console.log('email has been sent'),
        transport: {
          host: env.MAILER_HOST,
          port: Number(env.MAILER_PORT),
          auth: {
            user: env.MAILER_USER,
            pass: env.MAILER_PASS,
          },
        },
      }),
    }),
    MailModule,
    HttpModule,
    DatabaseModule,
  ],
  controllers: [MessageController],
  providers: [],
})
export class AppModule {}
