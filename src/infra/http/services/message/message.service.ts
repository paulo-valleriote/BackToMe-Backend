import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { MessageRepository } from '@app/repositories/Message/message';
import { Message } from '@domain/message/Message';

@Injectable()
export class MessageService {
  constructor(private messageRepository: MessageRepository) {}

  async createMessage(message: any): Promise<string> {
    const newMessage = new Message(message);

    const messageId = await this.messageRepository.register(newMessage);

    return messageId;
  }

  async findMessageById(id: string) {
    if (!id) {
      throw new BadRequestException('Identificação de mensagem inválida');
    }
    const message = await this.messageRepository.findMessageByUserId(id);
    if (!('senderId' in message[0])) {
      throw new BadRequestException('Mensagem não encontrada');
    }
    return message;
  }

  async deleteMessage(messageId: string, userId: string): Promise<void> {
    const messages: any[] = await this.messageRepository.findMessageById(
      userId,
    );

    const messageToDelete = messages.find(
      (message) => message.id === messageId,
    );
    console.log(messageToDelete, messageId, userId);
    if (!messageToDelete) {
      throw new NotFoundException('Message not found');
    }

    await this.messageRepository.deleteMessage(messageId, userId);
  }
}
