import { injectable, inject } from "tsyringe";

import { BaseControllerImpl } from "@/modules/base/BaseControllerImpl";

import {
  CreateCustomerDTO,
  UpdateCustomerDTO,
  CustomerDTO,
} from "../../../dtos/CustomerDTO";

import { CustomerService } from "../../../business/services/CustomerService";

@injectable()
export class CustomerControllerImpl
  extends BaseControllerImpl<CustomerDTO, CreateCustomerDTO, UpdateCustomerDTO>
{
  constructor(
    @inject("CustomerService")
    customerService: CustomerService
  ) {
    super(customerService);
  }
}