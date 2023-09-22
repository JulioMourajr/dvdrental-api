import { BaseService } from "@/modules/base/BaseService";

import {
    CountryDTO,
    CreateCountryDTO,
    UpdateCountryDTO
} from '@/modules/location/country/dtos/CountryDTO';

export interface CountryService 
    extends BaseService<CountryDTO, CreateCountryDTO, UpdateCountryDTO>{}