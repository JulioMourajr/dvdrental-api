import { type } from "os";

export class InventoryDTO{
    inventoryId:number;
    filmId: number;
    storeId:number;
    lastUpdate: Date;
}

export type CreateInventoryDTO = Omit<InventoryDTO, 'inventoryId' | 'lastUpdate'>;
export type UpdateInventoryDTO = Partial<InventoryDTO>;