import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Country {
    @PrimaryGeneratedColumn()
    countryId: number;

    @Column()
    country: string;

    @Column({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP'
    })
    lastUpdated: Date
}