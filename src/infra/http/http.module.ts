import { Module } from '@nestjs/common';
import { LostAnimalsModule } from './controllers/animals/lost-animals.module';
import { UsersModule } from './controllers/users/user.module';

@Module({
  imports: [LostAnimalsModule, UsersModule],
})
export class HttpModule {}
