import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Inventory {
    @PrimaryGeneratedColumn()
    inventoryId:number;

    @Column()
    filmId:number;

    @Column()
    storeId:number;

    @Column({
        type: "timestamp",
        default: () => "CURRENT_TIMESTAMP"
    })
    lastUpdate: Date;
}