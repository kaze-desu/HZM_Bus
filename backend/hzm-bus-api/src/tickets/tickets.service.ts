import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ticket } from './ticket.entity';
import * as crypto from 'crypto';

@Injectable()
export class TicketsService {
  constructor(
    @InjectRepository(Ticket)
    private ticketsRepository: Repository<Ticket>,
  ) {}

  async findByUser(username: string): Promise<Ticket[]> {
    const tickets = await this.ticketsRepository.find({
      where: { user: { username: username } },  // 更新查询以反映关联
      relations: ['user']  // 确保加载用户关联
    });
    return tickets.map(ticket => ({
      ...ticket,
      token: this.generateToken(),
      status: this.checkTicketStatus(ticket.date)
    }));
  }

  public generateToken(): string {
    return crypto.randomBytes(16).toString('hex');
  }

  private checkTicketStatus(date: string): boolean {
    const ticketDate = new Date(date);
    const currentDate = new Date();
    return currentDate <= ticketDate;
  }
}
