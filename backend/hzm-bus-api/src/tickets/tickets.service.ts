import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ticket } from './ticket.entity';



@Injectable()
export class TicketsService {
  constructor(
    @InjectRepository(Ticket)
    private ticketsRepository: Repository<Ticket>
  ) {}

  //通过用户名查找车票信息，并返回
  async findByUser(username: string): Promise<Ticket[]> {
    const rawTickets = await this.ticketsRepository.find();
    let tickets: Ticket[] = [];
    rawTickets.forEach(ticket => {
      if(ticket.username == username) {
        tickets.push(ticket);
        console.log(ticket);      //for testing
      }
    });
    return tickets; //返回车票数组
  }
}
