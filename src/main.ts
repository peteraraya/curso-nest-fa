import { NestFactory } from '@nestjs/core';
import { AppModule, ObserveInstrument } from './app.module.js';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    instrument: ObserveInstrument,
    bufferLogs: true,
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // remueve los campos no permitidos
      forbidNonWhitelisted: true, // remueve los campos no permitidos
      transformOptions: { exposeUnsetFields: false },
    }),
  )


  app.useLogger(['log', 'error', 'warn', 'debug', 'verbose']);
  await app.listen(process.env.PORT ?? 3000);
}
await bootstrap();
