import { DatabaseModule } from '@infra/database/database.module';
import { MessageController } from 'src/app.controler';
import { HttpModule } from '@infra/http/http.module';
import { MailerModule } from '@nestjs-modules/mailer';
import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [HttpModule, DatabaseModule],
  controllers: [MessageController],
})
@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    BullModule.forRoot({
      redis: {
        host: process.env.QUEUE_HOST,
        port: Number(process.env.QUEUE_PORT),
      },
    }),
    MailerModule.forRoot({
      transport: {
        host: process.env.MAILER_HOST,
        port: process.env.MAILER_PORT,
        auth: {
          user: process.env.MAILER_USER,
          pass: process.env.MAILER_PASS,
        },
      },
    }),
    HttpModule,
    DatabaseModule,
  ],
})
export class AppModule {}
