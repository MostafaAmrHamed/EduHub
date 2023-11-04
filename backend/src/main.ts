import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({ origin: '*' });
  app.setGlobalPrefix('api');
  setupSwagger(app);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3001);
}

function setupSwagger(app: INestApplication) {
  const serverUrl =
    process.env.NODE_ENV == 'production'
      ? 'https://educationhub.onrender.com'
      : 'http://localhost:3001/';

  const options = new DocumentBuilder()
    .setTitle('EduHub API')
    .setDescription('API Specifications')
    .setVersion('1.0')
    .addBearerAuth(
      { type: 'http', in: 'header', scheme: 'bearer', bearerFormat: 'JWT' },
      'access_token',
    )
    .addServer(serverUrl, process.env.NODE_ENV)
    .build();

  const document = SwaggerModule.createDocument(app, options);

  SwaggerModule.setup('/api', app, document);
}

bootstrap();
