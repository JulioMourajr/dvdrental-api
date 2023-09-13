import {Customer} from '../entities/customer.entity'

import { 
  CustomerDTO, 
  CreateCustomerDTO, 
  UpdateCustomerDTO 
} from '@/modules/customers/customer/dtos/CustomerDTO'

import { BaseRepositoryImpl } from '@/modules/base/BaseRepositoryImpl'

export class CustomerRepositoryImpl extends BaseRepositoryImpl<CustomerDTO, CreateCustomerDTO, UpdateCustomerDTO> {
  constructor() {
    super('customerId', Customer);
  }
}