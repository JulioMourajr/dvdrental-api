import {Entity, Column, PrimaryGeneratedColumn, } from 'typeorm'

@Entity()
export class Customer{
  @PrimaryGeneratedColumn()
  customerId: number;

  @Column()
  storeId: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  addressId: number;

  @Column()
  activebool: boolean;

  @Column()
  createDate: Date;

  @Column({ type: 'timestamp' , default: () => 'CURRENT_TIMESTAMP' })
  lastUpdate: Date;

  @Column()
  active: boolean;
}


