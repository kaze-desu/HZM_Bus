import { Entity, PrimaryGeneratedColumn, Column, OneToOne,} from 'typeorm';
import { Purchase } from '../purchases/purchase.entity';

@Entity()//车票实体（id,purchase,username,token...)
export class Ticket {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Purchase, purchase => purchase.ticket)//双向定义一对一关系
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