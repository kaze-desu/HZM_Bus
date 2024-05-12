import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://localhost:5173',                    // 前端运行地址
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,                     
    optionsSuccessStatus: 204,
    allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept',
    credentials: true,
  });
  await app.listen(8000);//监听地址，前段传输路径
}
bootstrap();
