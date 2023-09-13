import { 
  CustomerDTO, 
  CreateCustomerDTO, 
  UpdateCustomerDTO 
} from '../../dtos/CustomerDTO'

import { BaseRepository } from '@/modules/base/BaseRepository'

export interface CustomerRepository
  extends BaseRepository<CustomerDTO, CreateCustomerDTO, UpdateCustomerDTO> { }