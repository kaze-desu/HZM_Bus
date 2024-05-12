import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ticket } from './ticket.entity';
import { User } from '../users/user.entity';

@Injectable()
export class TicketsService {
  constructor(
    @InjectRepository(Ticket)
    private ticketsRepository: Repository<Ticket>,
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async findByUser(username: string): Promise<Ticket[]> {
    const user = await this.usersRepository.findOne({
      where: { username },
    });
    return user.tickets;
  }
}
