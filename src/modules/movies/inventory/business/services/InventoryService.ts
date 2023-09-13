import { BaseService } from "@/modules/base/BaseService";

import { 
    InventoryDTO, 
    CreateInventoryDTO, 
    UpdateInventoryDTO 
} from "../../dto/InventoryDTO";

export interface InventoryService extends BaseService<InventoryDTO, CreateInventoryDTO, UpdateInventoryDTO>{} 