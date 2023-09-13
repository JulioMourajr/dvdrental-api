import { injectable, inject } from "tsyringe";

import { BaseControllerImpl } from "@/modules/base/BaseControllerImpl";

import {
  AddressDTO,
  CreateAddressDTO,
  UpdateAddressDTO,
} from "../../../dtos/AddressDTO";

import { AddressService } from "../../../business/services/AddressService";

@injectable()
export class AddressControllerImpl
  extends BaseControllerImpl<AddressDTO, CreateAddressDTO, UpdateAddressDTO>
{
  constructor(
    @inject("AddressService")
    addressService: AddressService
  ) {
    super(addressService);
  }
}