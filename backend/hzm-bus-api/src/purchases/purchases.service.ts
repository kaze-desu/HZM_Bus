import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Purchase } from './purchase.entity';
import { Ticket } from '../tickets/ticket.entity';
import { User } from '../users/user.entity';
import * as crypto from 'crypto';


@Injectable()
export class PurchasesService {
  constructor(
    @InjectRepository(Purchase)
    private purchasesRepository: Repository<Purchase>,
    @InjectRepository(Ticket)
    private ticketsRepository: Repository<Ticket>,
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async create(purchase: Purchase, username: string): Promise<Purchase> {
    const ticket = new Ticket();
    if(username == null || username == '') {
      throw new Error('Error : Username not defined');
    }
    else {
      ticket.from = purchase.from;
      ticket.target = purchase.target;
      ticket.date = purchase.date;
      ticket.time = purchase.time;
      ticket.amount = purchase.amount;
      ticket.token = this.generateToken();
      ticket.status = this.checkTicketStatus(purchase.date);
      ticket.username = username;

      const savedTicket = await this.ticketsRepository.save(ticket);
      purchase.ticket = savedTicket;

      return await this.purchasesRepository.save(purchase);
    }
  }

  private generateToken(): string {
    return crypto.randomBytes(16).toString('hex');
  }

  private checkTicketStatus(date: string): boolean {
    const ticketDate = new Date(date);
    const currentDate = new Date();
    return ticketDate > currentDate;
  }
}