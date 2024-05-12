import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Ticket } from '../tickets/ticket.entity'; 


@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  username: string;

  @Column()
  password: string;

  @Column({ default: true }) // 假设新用户默认为激活状态
  status: boolean;

  @OneToMany(() => Ticket, ticket => ticket.user)
  tickets: Ticket[];
}


