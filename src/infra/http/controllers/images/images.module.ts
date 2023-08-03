import { Module } from '@nestjs/common';
import { ImagesController } from './images.controller';
import { FileService } from '@infra/http/services/images/images.service';
import { UsersDatabaseModule } from '@infra/database/prisma/repositories/prisma-user-database.module';

@Module({
  imports:[ UsersDatabaseModule],
  controllers: [ImagesController],
  providers: [FileService],
})
export class ImagesModule {}
