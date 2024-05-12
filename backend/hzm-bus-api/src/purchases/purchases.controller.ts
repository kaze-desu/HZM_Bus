import { Controller, Post, Body } from '@nestjs/common';
import { PurchasesService } from './purchases.service';
import { Purchase } from './purchase.entity';


//purchase的定义路由，格式为/api/buy的@Post请求会由此响应
@Controller('api')
export class PurchasesController {
  constructor(private readonly purchasesService: PurchasesService) {}

  @Post('buy')
  async create(@Body() purchase: Purchase, @Body('username') username: string) {
    return this.purchasesService.create(purchase, username);    //转发到service文件实现功能：购买记录
  }
}