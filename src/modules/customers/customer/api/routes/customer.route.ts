import { Router } from "express";
import { container } from "tsyringe";

import baseRoutes from "@/modules/base/base.routes";

const customerRouter = Router();

const customerController = container.resolve("CustomerController");

customerRouter.use("/", baseRoutes(customerController));

export default customerRouter;