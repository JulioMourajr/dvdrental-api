import { AddressDTO, 
  CreateAddressDTO, 
  UpdateAddressDTO 
} from "../../dtos/AddressDTO";

import { BaseRepository } from "@/modules/base/BaseRepository";

export interface AddressRepository
  extends BaseRepository<AddressDTO, CreateAddressDTO, UpdateAddressDTO> { }