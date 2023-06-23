import { DatabaseModule } from '@infra/database/database.module';
import { MessageController } from '@infra/http/controllers/message/message.controler';
import { HttpModule } from '@infra/http/http.module';
import { Module } from '@nestjs/common';
@Module({
  imports: [HttpModule, DatabaseModule],
  controllers: [MessageController],
})
export class AppModule {}
