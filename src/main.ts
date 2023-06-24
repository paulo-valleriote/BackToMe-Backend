import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from "cors"

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
<<<<<<< HEAD
 app.enableCors();
=======
  app.enableCors();
>>>>>>> b39504d78415dda0a2d3df1c116f20332850d9b5
  await app.listen(3000);
}
bootstrap();
