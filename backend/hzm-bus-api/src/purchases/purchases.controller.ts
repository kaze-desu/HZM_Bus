import { Controller, Post, Body } from '@nestjs/common';
import { PurchasesService } from './purchases.service';
import { Purchase } from './purchase.entity';

@Controller('api')
export class PurchasesController {
  constructor(private readonly purchasesService: PurchasesService) {}

  @Post('buy')
  async create(@Body() purchase: Purchase, @Body('username') username: string) {
    return this.purchasesService.create(purchase, username);
  }
}