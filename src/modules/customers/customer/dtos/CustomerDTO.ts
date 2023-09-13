export class CustomerDTO{
  customerId: number;
  storeId: number;
  firstName: string;
  lastName: string;
  email: string;
  addressId: number;
  activebool: boolean;
  createDate: Date;
  lastUpdate: Date;
  active: boolean;
}

export type CreateCustomerDTO = Omit<CustomerDTO, 'customerId' | 'lastUpdate' | 'createDate'>;
export type UpdateCustomerDTO = Partial<CustomerDTO>;