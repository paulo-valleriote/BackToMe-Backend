import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: ['https://back-to-me.vercel.app', 'http://localhost:5173','http://localhost:3000',],
  });

  await app.listen(3000);
}
bootstrap();
