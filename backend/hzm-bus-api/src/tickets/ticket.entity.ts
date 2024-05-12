import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne,} from 'typeorm';
import { User } from '../users/user.entity';
import { Purchase } from '../purchases/purchase.entity';

@Entity()
export class Ticket {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Purchase, purchase => purchase.ticket)
  purchase: Purchase;

  @Column({length: 100})
  username: string;

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

  @Column({ length: 32 })
  token: string;

  @Column()
  status: boolean;
}