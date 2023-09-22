import { injectable, inject } from "tsyringe";

import { BaseServiceImpl } from "@/modules/base/BaseServiceImpl";

import { CountryDTO, CreateCountryDTO, UpdateCountryDTO } from "../../../dtos/CountryDTO";

import { CountryRepository } from "../../../database/repositories/CountryRepository";

@injectable()
export class CountryServiceImpl extends BaseServiceImpl<CountryDTO, CreateCountryDTO, UpdateCountryDTO> {
    constructor(
        @inject("CountryRepository")
        countryRepository: CountryRepository
    ) {
        super(countryRepository);
    }
}

