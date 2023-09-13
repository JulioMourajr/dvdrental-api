import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Address {
  @PrimaryGeneratedColumn()
  addressId: number;

  @Column()
  address: string;

  @Column()
  address2: string;

  @Column()
  district: string;

  @Column()
  cityId: number;

  @Column()
  postalCode: string;

  @Column()
  phone: string;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  lastUpdate: Date;
}