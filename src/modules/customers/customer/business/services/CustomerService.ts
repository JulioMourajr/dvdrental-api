import { BaseService } from "@/modules/base/BaseService";

import {
  CustomerDTO,
  CreateCustomerDTO,
  UpdateCustomerDTO,
} from "../../dtos/CustomerDTO";

export interface CustomerService
  extends BaseService<CustomerDTO, CreateCustomerDTO, UpdateCustomerDTO> {}