import { Router } from "express";
import { container } from "tsyringe";

import baseRoutes from "@/modules/base/base.routes";

const addressRouter = Router();

const addressController = container.resolve("AddressController");

addressRouter.use("/", baseRoutes(addressController));

export default addressRouter;