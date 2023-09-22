import { injectable, inject } from "tsyringe";

import { BaseControllerImpl } from "@/modules/base/BaseControllerImpl";

import { CountryDTO, CreateCountryDTO, UpdateCountryDTO } from "../../../dtos/CountryDTO";

import { CountryService } from "../../../business/services/CountryService";

@injectable()
export class CountryControllerImpl extends BaseControllerImpl<CountryDTO, CreateCountryDTO, UpdateCountryDTO> {
    constructor(
        @inject("CountryService")
        countryService: CountryService
    ){
        super(countryService);
    }
}