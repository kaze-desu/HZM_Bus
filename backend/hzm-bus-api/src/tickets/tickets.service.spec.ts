import { Test, TestingModule } from '@nestjs/testing';
import { TicketsService } from './tickets.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Ticket } from './ticket.entity';
import * as crypto from 'crypto';

describe('TicketsService', () => {
  let service: TicketsService;
  let mockTicketRepository;

  beforeEach(async () => {
    mockTicketRepository = {
      find: jest.fn().mockImplementation(() => Promise.resolve([
        { id: 1, from: 'CityA', target: 'CityB', date: new Date().toISOString(), time: '12:00', amount: 1, token: crypto.randomBytes(16).toString('hex'), status: true },
      ])),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TicketsService,
        {
          provide: getRepositoryToken(Ticket),
          useValue: mockTicketRepository
        },
      ],
    }).compile();

    service = module.get<TicketsService>(TicketsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return an array of tickets for a given user', async () => {
    const tickets = await service.findByUser('testuser');
    expect(tickets).toBeDefined();
    expect(tickets).toBeInstanceOf(Array);
    expect(tickets).toHaveLength(1);
    expect(tickets[0].id).toEqual(1);
  });

  it('should generate a valid token of 32 characters', () => {
    const token = service['generateToken']();
    expect(token).toBeDefined();
    expect(token).toHaveLength(32);
  });

  it('should validate ticket status correctly based on date', () => {
    const currentDate = new Date();
    const futureDate = new Date(currentDate.getTime() + 86400000); // +1 day
    const pastDate = new Date(currentDate.getTime() - 86400000); // -1 day
    const futureStatus = service['checkTicketStatus'](futureDate.toISOString());
    const pastStatus = service['checkTicketStatus'](pastDate.toISOString());

    expect(futureStatus).toBe(true); // Future date should return true
    expect(pastStatus).toBe(false); // Past date should return false
  });
});
