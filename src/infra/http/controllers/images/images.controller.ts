import {
  Controller,
  Post,
  Param,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { FileService } from '@infra/http/services/images/images.service';

@Controller('file')
export class ImagesController {
  constructor(private imageService: FileService) {}

  @Post(':id/upload')
  @UseInterceptors(FileInterceptor('file'))
  async upload(@Param('id') id:string ,@UploadedFile() file: Express.Multer.File) {
    return await this.imageService.uploadPhoto(id,file);
  }
}
