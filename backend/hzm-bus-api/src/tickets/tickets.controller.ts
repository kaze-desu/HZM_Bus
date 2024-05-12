import { Controller, Get, Query, HttpException, HttpStatus } from '@nestjs/common';
import { TicketsService } from './tickets.service';


//车票的路由，经路径/api/ticket的Get申请由此响应
@Controller('api')
export class TicketsController {
  constructor(private readonly ticketsService: TicketsService) {}

  @Get('ticket')
  async getTickets(@Query('user') username: string) { //到ticketservice实现查找票据的功能
    try {
      const tickets = await this.ticketsService.findByUser(username);
      return tickets;
      //HTTP异常检测
    } catch (error) {
      throw new HttpException('Failed to retrieve tickets', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}