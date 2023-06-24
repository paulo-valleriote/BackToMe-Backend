import { DatabaseModule } from '@infra/database/database.module';
import { MessageController } from 'src/app.controler';
import { HttpModule } from '@infra/http/http.module';
import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
@Module({
  imports: [HttpModule, DatabaseModule],
  controllers: [MessageController],
})
@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    HttpModule,
    DatabaseModule,
  ],
})
export class AppModule {}
