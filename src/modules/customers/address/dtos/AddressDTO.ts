export class AddressDTO {
  addressId: number;
  address: string;
  address2?: string;
  district: string;
  cityId: number;
  postalCode: string;
  phone: string;
  lastUpdate: Date;
}

export type CreateAddressDTO = Omit<AddressDTO, 'addressId' | 'lastUpdate'>;
export type UpdateAddressDTO = Partial<AddressDTO>;

