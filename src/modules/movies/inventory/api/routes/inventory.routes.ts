import { Router } from "express";
import { container } from "tsyringe";

import baseRoutes from "@/modules/base/base.routes";

const inventoryRouter = Router()

const inventoryController = container.resolve('InventoryController');

inventoryRouter.use('/', baseRoutes(inventoryController))

export default inventoryRouter;

