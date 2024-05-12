import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Purchase } from './purchase.entity';
import { Ticket } from '../tickets/ticket.entity';
import { User } from '../users/user.entity';
import * as crypto from 'crypto';

//购票记录的业务逻辑实现部分，
@Injectable()
export class PurchasesService { 
  constructor(    //为实体提供与数据库互动操作的能力
    @InjectRepository(Purchase)
    private purchasesRepository: Repository<Purchase>,
    @InjectRepository(Ticket)
    private ticketsRepository: Repository<Ticket>,
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}
  //功能：创建购票记录 主要是生成tiket，以及随机数生成token
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

      return await this.purchasesRepository.save(purchase); //将购票记录保存到数据库
    }
  }

  //生成32位的16进制随机数字符串，token
  private generateToken(): string {
    return crypto.randomBytes(16).toString('hex');
  }

  //检测票据是否过期
  private checkTicketStatus(date: string): boolean {
    const ticketDate = new Date(date);
    const currentDate = new Date();
    return ticketDate > currentDate;
  }
}