import { Module } from '@nestjs/common';
import { LostAnimalsModule } from './controllers/animals/lost-animals.module';

@Module({
  imports: [LostAnimalsModule],
})
export class HttpModule {}
