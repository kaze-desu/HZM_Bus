import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from '../users/user.entity';  // 确保路径正确

@Entity()
export class Ticket {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, user => user.tickets)
  user: User;

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
