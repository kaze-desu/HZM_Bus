import { Controller, Get, Query, HttpException, HttpStatus } from '@nestjs/common';
import { TicketsService } from './tickets.service';

@Controller('api')
export class TicketsController {
  constructor(private readonly ticketsService: TicketsService) {}

  @Get('ticket')
  async getTickets(@Query('user') username: string) {
    try {
      const tickets = await this.ticketsService.findByUser(username);
      return tickets;
    } catch (error) {
      throw new HttpException('Failed to retrieve tickets', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}