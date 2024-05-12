import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ticket } from './ticket.entity';
import { User } from '../users/user.entity';

@Injectable()
export class TicketsService {
  constructor(
    @InjectRepository(Ticket)
    private ticketsRepository: Repository<Ticket>
  ) {}

  async findByUser(username: string): Promise<Ticket[]> {
    const rawTickets = await this.ticketsRepository.find();
    let tickets: Ticket[] = [];
    rawTickets.forEach(ticket => {
      if(ticket.username == username) {
        tickets.push(ticket);
        console.log(ticket);
      }
    });
    return tickets;
  }
}
