import { Module } from '@nestjs/common';
import { FirebaseMessagesRepository } from './prisma-message-repository';
import { MessageRepository } from '@app/repositories/Message/message';

@Module({
  providers: [
    { provide: MessageRepository, useClass: FirebaseMessagesRepository },
  ],
  exports: [{ provide: MessageRepository, useClass: FirebaseMessagesRepository }],
})
export class FirebaseMessagesModule {}
