import { Module } from '@nestjs/common';
import { LostAnimalsModule } from './controllers/animals/lost-animals.module';
import { UsersModule } from './controllers/users/user.module';
import { FoundAnimalsModule } from './controllers/animals/found-animals.module';
import { AdoptionAnimalsModule } from './controllers/animals/adoption-animals.module';
import { ImagesModule } from './controllers/images/images.module';
import { MailQueueModule } from './controllers/mail/mail.module';
import { OngsModule } from './controllers/ong\'s/ong.module';

@Module({
  imports: [
    LostAnimalsModule,
    UsersModule,
    FoundAnimalsModule,
    MailQueueModule,
    AdoptionAnimalsModule,
    ImagesModule,
    OngsModule
  ],
})
export class HttpModule {}
