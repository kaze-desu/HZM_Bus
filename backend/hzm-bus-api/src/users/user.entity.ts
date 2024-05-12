import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Ticket } from '../tickets/ticket.entity';

//用户实体（id,username,pwd,tickets)
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 , unique:true})
  username: string;

  @Column()
  password: string;;

  @OneToMany(type => Ticket,  ticket => ticket.username)//与车票关系，一对多
  tickets: Ticket[];
}


