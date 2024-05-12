import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Ticket } from '../tickets/ticket.entity';


@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 , unique:true})
  username: string;

  @Column()
  password: string;;

  @OneToMany(type => Ticket,  ticket => ticket.username)
  tickets: Ticket[];
}


