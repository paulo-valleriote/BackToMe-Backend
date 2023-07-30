import { Module } from '@nestjs/common';
import { ImagesController } from './images.controller';
import { FileService } from '@infra/http/services/images/images.service';

@Module({
  controllers: [ImagesController],
  providers: [FileService],
})
export class ImagesModule {}
