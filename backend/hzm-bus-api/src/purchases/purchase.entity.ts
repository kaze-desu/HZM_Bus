import { Entity, PrimaryGeneratedColumn, Column ,OneToOne,JoinColumn} from 'typeorm';
import { Ticket } from '../tickets/ticket.entity';

@Entity()
export class Purchase {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Ticket, ticket => ticket.purchase)
  @JoinColumn()
  ticket: Ticket;

  @Column({ length: 100 })
  from: string;

  @Column({ length: 100 })
  target: string;

  @Column()
  date: string;

  @Column()
  time: string;

  @Column()
  amount: number;
}
