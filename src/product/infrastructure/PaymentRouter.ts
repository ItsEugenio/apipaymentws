import express from "express";

import {
  createPaymentController,
  getAllPaymentController,
  getByIdPaymentController,
} from "./dependencies";

export const paymentRouter = express.Router();

paymentRouter.get(
  "/",
  getAllPaymentController.run.bind(getAllPaymentController)
);
paymentRouter.get(
  "/:id",
  getByIdPaymentController.run.bind(getByIdPaymentController)
);
paymentRouter.post(
  "/",
  createPaymentController.run.bind(createPaymentController)
);
