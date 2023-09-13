import { injectable, inject } from "tsyringe";

import { BaseControllerImpl } from "@/modules/base/BaseControllerImpl";

import { InventoryDTO, CreateInventoryDTO, UpdateInventoryDTO } from "@/modules/movies/inventory/dto/InventoryDTO";


import { InventoryService } from "@/modules/movies/inventory/business/services/InventoryService";

@injectable()
export class InventoryControllerImpl extends BaseControllerImpl<InventoryDTO, CreateInventoryDTO, UpdateInventoryDTO>{
    
    constructor(
        @inject('InventoryService')
        inventoryService:InventoryService
    ){
        super(inventoryService);
    }
}