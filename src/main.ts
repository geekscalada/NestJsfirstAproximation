import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  const configSwagger = new DocumentBuilder()
    .setTitle('Courses-web documentation Title')
    .setDescription('Courses-web documentation description')
    .setVersion('1.0')
    .addTag('courseTag')
    .build();
  const document = SwaggerModule.createDocument(app, configSwagger);
  SwaggerModule.setup('documentation', app, document);
  
  // You need to declare use of PIPES for all app (for example for use in DTO)
  app.useGlobalPipes(new ValidationPipe());
  
  await app.listen(3000);
}
bootstrap();
