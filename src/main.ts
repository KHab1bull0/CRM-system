import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api/v1');

  app.useGlobalPipes(new ValidationPipe());

  app.enableCors({
    origin: '*', // Replace with your admin dashboard URL in production
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });

  const config = new DocumentBuilder()
    .setTitle('CRM of AutoService API')
    .setDescription('API documentation for the CRM of AutoService service')
    .setVersion('1.0')
    .addTag('CRM of AutoService')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document, {
    swaggerOptions: {
      persistAuthorization: true,
    },
    customSiteTitle: 'CRM Auto API Documentation',
    customJs: '/swagger-ui-init.js',
  });

  await app.listen(3000, () => {
    console.log('Server is running on port', 3000);
  });
}
bootstrap();
