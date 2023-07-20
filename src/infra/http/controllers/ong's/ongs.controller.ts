import {
  Controller,
  Get,
} from '@nestjs/common';
import { OngsService } from '@infra/http/services/Ongs/ongs.service';
import { Ongs } from '@prisma/client';

@Controller('ongs')
export class OngsController {
  constructor(private ongsService: OngsService) {}

  @Get('all')
  async getAllOngs(): Promise<Ongs[] | Error> {
    return this.ongsService.getAllOngs();
  }

}
