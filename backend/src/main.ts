import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({ origin: '*' });
  const options = new DocumentBuilder()
    .setTitle('EduHub API')
    .setDescription('API documentation for EduHub')
    .setVersion('1.0')
    .addServer('http://localhost:3001/', 'Local environment')
    .addServer('https://educationhub.onrender.com', 'Production')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('swagger', app, document);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3001);
}
bootstrap();
