import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('bank_account')
export class Account {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ type: 'numeric' })
  balance: number;
}
