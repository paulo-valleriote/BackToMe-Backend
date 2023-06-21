import { Module } from '@nestjs/common';
import { ImagesController } from './images.controller';
import { ImageService } from '@infra/http/services/images/images.service';

@Module({
  controllers: [ImagesController],
  providers: [ImageService],
})
export class ImagesModule {}
