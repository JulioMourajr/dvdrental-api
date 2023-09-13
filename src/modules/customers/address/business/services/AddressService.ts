import { BaseService } from "@/modules/base/BaseService";

import { AddressDTO, CreateAddressDTO, UpdateAddressDTO } from "../../dtos/AddressDTO";

export interface AddressService
  extends BaseService<AddressDTO, CreateAddressDTO, UpdateAddressDTO> {}

  