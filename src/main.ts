import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

dotenv.config(); // Cargar las variables de entorno

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Configuración de CORS
  const allowedOrigins = process.env.CORS_ORIGINS?.split(',') || [];
  app.enableCors({
    origin: allowedOrigins,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  // Configuración de Swagger
  const options = new DocumentBuilder()
    .setTitle('Desafio Entrevista')
    .setDescription('API para Leer, Registrar, Editar, y Eliminar datos')
    .setVersion('1.0')
    .addTag('usuarios')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-docs', app, document);

  await app.listen(3000);
}

bootstrap();