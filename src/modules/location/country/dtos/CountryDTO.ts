export class CountryDTO {
    countryId:number;
    country:string;
    lastUpdated:Date;
}

export type CreateCountryDTO = Omit<CountryDTO, 'countryId' | 'lastUpdated'>;
export type UpdateCountryDTO = Partial<CountryDTO>;