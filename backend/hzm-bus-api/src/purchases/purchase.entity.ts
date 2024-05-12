import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Purchase {
  @PrimaryGeneratedColumn()
  id: number;

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
