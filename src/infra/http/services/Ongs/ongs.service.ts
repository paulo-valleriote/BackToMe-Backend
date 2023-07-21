import { OngsRepository } from '@app/repositories/Ongs/ongs';
import { Ong } from "@domain/Ong's/Ongs";
import {
  Injectable,
  
} from '@nestjs/common';

@Injectable()
export class OngsService {
  constructor(private ongRepository: OngsRepository) {}

  async getAllOngs(): Promise<Ong['props'][] | Error> {
    return this.ongRepository.findAllOngs();
  }
}
