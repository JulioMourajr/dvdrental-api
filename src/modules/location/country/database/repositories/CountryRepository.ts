import { 
    CountryDTO, 
    CreateCountryDTO, 
    UpdateCountryDTO
} from '../../dtos/CountryDTO'

import { BaseRepository } from '@/modules/base/BaseRepository'

export interface CountryRepository extends BaseRepository<CountryDTO, CreateCountryDTO, UpdateCountryDTO> {}