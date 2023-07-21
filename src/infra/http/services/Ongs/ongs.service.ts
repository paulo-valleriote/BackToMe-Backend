import { OngsRepository } from '@app/repositories/Ongs/ongs';
import { Ong } from "@domain/Ong's/Ongs";
import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';

@Injectable()
export class OngsService {
  constructor(private ongRepository: OngsRepository) {}

  async getAllOngs(): Promise<Ong['props'][] | Error> {
    return this.ongRepository.findAllOngs();
  }
}
