import { Inventory } from "../entities/inventory.entity";

import { 
    InventoryDTO,
    CreateInventoryDTO,
    UpdateInventoryDTO
} from "@/modules/movies/inventory/dto/InventoryDTO";

import { BaseRepositoryImpl } from "@/modules/base/BaseRepositoryImpl";

export class InventoryRepositoryImpl 
extends BaseRepositoryImpl<InventoryDTO, CreateInventoryDTO, UpdateInventoryDTO>{
    constructor(){
        super('inventoryId', Inventory);
    }
}