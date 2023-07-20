import { PrismaOngRepository } from '@infra/database/prisma/repositories/prisma-ong-repository';
import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { Ongs } from '@prisma/client';

@Injectable()
export class OngsService {
  constructor(private ongRepository: PrismaOngRepository) {}

  async getAllOngs(): Promise<Ongs[] | Error> {
    return this.ongRepository.findAllOngs();
  }

}
