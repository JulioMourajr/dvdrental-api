import { Router } from 'express';

import filmRouter from '@/modules/movies/film/api/routes/film.routes';
import languageRouter from '@/modules/movies/language/api/routes/language.routes';
import customerRouter from '@/modules/customers/customer/api/routes/customer.route';
import addressRouter from '@/modules/customers/address/api/routes/address.route';
import inventoryRouter from '@/modules/movies/inventory/api/routes/inventory.routes';
import countryRouter from '@/modules/location/country/api/routes/country.routes';

const router = Router();

router.use('/films', filmRouter);
router.use('/languages', languageRouter);
router.use('/customers', customerRouter);
router.use('/address', addressRouter);
router.use('/inventory', inventoryRouter);
router.use('/countries', countryRouter);

export default router;
