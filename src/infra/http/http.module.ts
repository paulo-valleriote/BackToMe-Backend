import { Module } from '@nestjs/common';
import { LostAnimalsModule } from './controllers/animals/lost-animals.module';
import { UsersModule } from './controllers/users/user.module';
import { FoundAnimalsModule } from './controllers/animals/found-animals.module';
import { AdoptionAnimalsModule } from './controllers/animals/adoption-animals.module';
import { ImagesModule } from './controllers/images/images.module';
import { MailModule } from './controllers/mail/mail.module';

@Module({
  imports: [
    LostAnimalsModule,
    UsersModule,
    FoundAnimalsModule,
    MailModule,
    AdoptionAnimalsModule,
    ImagesModule,
  ],
})
export class HttpModule {}
