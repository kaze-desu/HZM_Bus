import { Entity, PrimaryGeneratedColumn, Column ,OneToOne,JoinColumn} from 'typeorm';
import { Ticket } from '../tickets/ticket.entity';

@Entity() //票据实体,即购买记录，与ticket对应（id，ticket,...)
export class Purchase {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Ticket, ticket => ticket.purchase) //每个购票记录关联一个票务信息
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
