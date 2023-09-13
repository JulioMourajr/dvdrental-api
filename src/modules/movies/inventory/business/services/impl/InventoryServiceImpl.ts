import { injectable, inject } from "tsyringe";

import { BaseServiceImpl } from "@/modules/base/BaseServiceImpl";

import { 
    InventoryDTO, 
    CreateInventoryDTO, 
    UpdateInventoryDTO 
} from "@/modules/movies/inventory/dto/InventoryDTO";

import { InventoryRepository } from "@/modules/movies/inventory/database/repositories/InventoryRepository";

@injectable()
export class InventoryServiceImpl extends BaseServiceImpl<InventoryDTO, CreateInventoryDTO, UpdateInventoryDTO>{
    
    constructor(
        @inject('InventoryRepository')
        inventoryRepository:InventoryRepository
    ){
        super(inventoryRepository)
    }
}