import { Address } from "../entities/address.entity";

import { 
  AddressDTO, 
  CreateAddressDTO, 
  UpdateAddressDTO 
} from "@/modules/customers/address/dtos/AddressDTO";

import { BaseRepositoryImpl } from "@/modules/base/BaseRepositoryImpl";

export class AddressRepositoryImpl extends BaseRepositoryImpl<AddressDTO, CreateAddressDTO, UpdateAddressDTO> {
  constructor() {
    super("addressId", Address);
  }
}