import { Router } from "express";
import { container } from "tsyringe";

import baseRoutes from "@/modules/base/base.routes";

const countryRouter = Router();

const countryController = container.resolve("CountryController");

countryRouter.use('/', baseRoutes(countryController));

export default countryRouter;