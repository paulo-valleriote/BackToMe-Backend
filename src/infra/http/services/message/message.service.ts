import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
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

  async findMessageByUserId(id: string) {
    if (!id) {
      throw new BadRequestException('Identificação de mensagem inválida');
    }
    const messages = await this.messageRepository.findMessageByUserId(id);
    if (messages.length > 0  && !('senderId' in messages[0])) {
      throw new BadRequestException('Mensagem não encontrada');
    }
    return messages;
  }


  
  
}
