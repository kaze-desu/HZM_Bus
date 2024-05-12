import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://localhost:5173',  // 允许访问的前端地址，更改为你的前端实际运行地址
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204,
    allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept',
    credentials: true,  // 如果需要发送cookies或认证相关信息
  });
  await app.listen(8000);
}
bootstrap();
