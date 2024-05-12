import { Controller, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { PurchasesService } from './purchases.service';

@Controller('api')
export class PurchasesController {
  constructor(private readonly purchasesService: PurchasesService) {}

  @Post('buy')
  async buyTicket(@Body() body: any) {
    try {
      const result = await this.purchasesService.create(body);
      return { success: true, message: 'Purchase successful.', data: result };
    } catch (error) {
      throw new HttpException('Purchase failed', HttpStatus.BAD_REQUEST);
    }
  }
}
