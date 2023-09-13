import { injectable, inject } from "tsyringe";

import { BaseServiceImpl } from "@/modules/base/BaseServiceImpl";

import {
  AddressDTO,
  CreateAddressDTO,
  UpdateAddressDTO,
} from "@/modules/customers/address/dtos/AddressDTO";

import { AddressRepository } from "@/modules/customers/address/database/repositories/AddressRepository";

@injectable()
export class AddressServiceImpl extends BaseServiceImpl<
  AddressDTO,
  CreateAddressDTO,
  UpdateAddressDTO
> {
  constructor(
    @inject("AddressRepository")
    addressRepository: AddressRepository
  ) {
    super(addressRepository);
  }
}

