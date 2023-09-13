import { injectable, inject } from "tsyringe";

import { BaseServiceImpl } from "@/modules/base/BaseServiceImpl";

import {
  CustomerDTO,
  CreateCustomerDTO,
  UpdateCustomerDTO,
} from "../../../dtos/CustomerDTO";

import { CustomerRepository } from "../../../database/repositories/CustomerRepository";

@injectable()
export class CustomerServiceImpl 
extends BaseServiceImpl<CustomerDTO, CreateCustomerDTO, UpdateCustomerDTO> {
  constructor(
    @inject("CustomerRepository")
    customerRepository: CustomerRepository
  ) {
    super(customerRepository);
  }
}