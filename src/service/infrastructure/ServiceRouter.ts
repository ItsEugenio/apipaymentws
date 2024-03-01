import express from "express";

import {
  createServiceController,
  getAllServiceController,
  getByIdServiceController,
} from "./dependencies";

export const serviceRouter = express.Router();

serviceRouter.get(
  "/",
  getAllServiceController.run.bind(getAllServiceController)
);
serviceRouter.get(
  "/:id",
  getByIdServiceController.run.bind(getByIdServiceController)
);
serviceRouter.post(
  "/",
  createServiceController.run.bind(createServiceController)
);
