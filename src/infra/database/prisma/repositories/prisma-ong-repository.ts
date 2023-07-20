import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Ongs } from '@prisma/client';

@Injectable()
export class PrismaOngRepository {
  constructor(private prismaService: PrismaService) {}

  async findAllOngs(): Promise<Ongs[]> {
    return await this.prismaService.ongs.findMany();
  }


}
