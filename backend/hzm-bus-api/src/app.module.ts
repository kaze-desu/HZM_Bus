import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './users/users.controller';
import { TicketsController } from './tickets/tickets.controller';
import { UsersService } from './users/users.service';
import { TicketsService } from './tickets/tickets.service';
import { PurchasesService } from './purchases/purchases.service';
import { User } from './users/user.entity';
import { Ticket } from './tickets/ticket.entity';
import { Purchase } from './purchases/purchase.entity';
import { PurchasesController } from './purchases/purchases.controller';

//根模块定义
@Module({
  imports: [
    TypeOrmModule.forRoot({//配置TypeORM链接。链接到数据库
      type: 'mariadb',
      host: 'anime.xiaohuo.icu',  
      port: 33060, 
      username: 'ticket',  
      password: 'xiaohuo233',  
      database: 'hzmBUS',  
      entities: ["dist/**/*.entity.js"],
      synchronize: true,  //自动同步
    }),
    TypeOrmModule.forFeature([User, Ticket, Purchase])  //注册实体
  ],
  controllers: [AppController, UsersController, TicketsController, PurchasesController], //注册控制器
  providers: [AppService, UsersService, TicketsService, PurchasesService],//注册服务
})
export class AppModule {}
