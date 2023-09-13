import { 
    InventoryDTO, 
    CreateInventoryDTO, 
    UpdateInventoryDTO } from
 "../../dto/InventoryDTO";

import { BaseRepository } from "@/modules/base/BaseRepository";

export interface InventoryRepository extends BaseRepository<InventoryDTO, CreateInventoryDTO, UpdateInventoryDTO>{}