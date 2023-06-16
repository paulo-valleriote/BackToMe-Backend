import { Module } from '@nestjs/common';
import { UsersDatabaseModule } from '@infra/database/prisma/repositories/prisma-user-database.module';
import { UsersController } from './users.controller';
import { UserService } from '@infra/http/services/users/users.service';

@Module({
  imports: [UsersDatabaseModule],
  controllers: [UsersController],
  providers: [UserService],
})
export class LostAnimalsModule {}
