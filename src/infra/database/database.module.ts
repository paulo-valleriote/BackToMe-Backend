import { Module } from '@nestjs/common';
import { UsersDatabaseModule } from './prisma/repositories/prisma-user-database.module';
import { LostAnimalsDatabaseModule } from './prisma/repositories/prisma-lost-animal-database.module';

@Module({
  imports: [UsersDatabaseModule, LostAnimalsDatabaseModule],
})
export class DatabaseModule {}
