import { Country } from "../entities/country.entity";

import { CountryDTO, CreateCountryDTO, UpdateCountryDTO } from "@/modules/location/country/dtos/CountryDTO";

import { BaseRepositoryImpl } from "@/modules/base/BaseRepositoryImpl";

export class CountryRepositoryImpl extends BaseRepositoryImpl< CountryDTO, CreateCountryDTO, UpdateCountryDTO> {
    constructor(){
        super('countryId', Country);
    }
    
}