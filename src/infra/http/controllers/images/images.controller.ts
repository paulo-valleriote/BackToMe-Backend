import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ImageService } from '@infra/http/services/images/images.service';

@Controller('image')
export class ImagesController {
  constructor(private imageService: ImageService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async upload(@UploadedFile() file: Express.Multer.File) {
    return await this.imageService.uploadPhoto(file);
  }
}
