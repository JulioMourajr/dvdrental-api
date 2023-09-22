import { container } from "tsyringe";

import { FilmControllerImpl } from "@/modules/movies/film/api/controllers/impl/FilmControllerImpl";
import { LanguageControllerImpl } from "@/modules/movies/language/api/controllers/impl/LanguageControllerImpl";
import { CustomerControllerImpl } from "@/modules/customers/customer/api/controllers/impl/CustomerControllerImpl";
import { AddressControllerImpl } from "@/modules/customers/address/api/controllers/impl/AddressControllerImpl";
import { InventoryControllerImpl } from "@/modules/movies/inventory/api/controllers/impl/InventoryControllerImpl";
import { CountryControllerImpl } from "@/modules/location/country/api/controllers/impl/CountryControllerImpl";

import { FilmServiceImpl } from "@/modules/movies/film/business/services/impl/FilmServiceImpl";
import { LanguageServiceImpl } from "@/modules/movies/language/business/services/impl/LanguageServiceImpl";
import { CustomerServiceImpl } from "@/modules/customers/customer/business/services/impl/CustomerServiceImpl";
import { AddressServiceImpl } from "@/modules/customers/address/business/services/impl/AddressServiceImpl";
import { InventoryServiceImpl } from "@/modules/movies/inventory/business/services/impl/InventoryServiceImpl";
import { CountryServiceImpl } from "@/modules/location/country/business/services/impl/CountryServiceImpl";

import { FilmRepositoryImpl } from "@/modules/movies/film/database/repositories/impl/typeorm/repositories/FilmRepositoryImpl";
import { LanguageRepositoryImpl } from "@/modules/movies/language/database/repositories/impl/typeorm/repositories/LanguageRepositoryImpl";
import { CustomerRepositoryImpl } from "@/modules/customers/customer/database/repositories/impl/typeorm/repositories/CustomerRepositoryImpl";
import { AddressRepositoryImpl } from "@/modules/customers/address/database/repositories/impl/typeorm/repositories/AddressRepositoryImpl";
import { InventoryRepositoryImpl } from "@/modules/movies/inventory/database/repositories/impl/typeorm/repositories/InventoryRepositoryImpl";
import { CountryRepositoryImpl } from "@/modules/location/country/database/repositories/impl/typeorm/repositories/CountryRepositoryImpl";

container.register("FilmController", {useClass: FilmControllerImpl});
container.register("LanguageController", {useClass: LanguageControllerImpl});
container.register("CustomerController", {useClass: CustomerControllerImpl});
container.register("AddressController", {useClass: AddressControllerImpl});
container.register("InventoryController", {useClass: InventoryControllerImpl})
container.register("CountryController", {useClass: CountryControllerImpl})

container.register("FilmService", {useClass: FilmServiceImpl});
container.register("LanguageService", {useClass: LanguageServiceImpl});
container.register("CustomerService", {useClass: CustomerServiceImpl});
container.register("AddressService", {useClass: AddressServiceImpl});
container.register("InventoryService", {useClass: InventoryServiceImpl})
container.register("CountryService", {useClass: CountryServiceImpl})

container.register("FilmRepository", {useClass: FilmRepositoryImpl});
container.register("LanguageRepository", {useClass: LanguageRepositoryImpl});
container.register("CustomerRepository", {useClass: CustomerRepositoryImpl});
container.register("AddressRepository", {useClass: AddressRepositoryImpl});
container.register("InventoryRepository", {useClass: InventoryRepositoryImpl})
container.register("CountryRepository", {useClass: CountryRepositoryImpl})
