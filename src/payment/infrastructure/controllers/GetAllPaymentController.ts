import { Request, Response } from "express";

import { GetAllPaymentUseCase } from "../../application/GetAllPaymentUseCase";

export class GetAllPaymentController {
  constructor(readonly getAllPaymentUseCase: GetAllPaymentUseCase) {}

  async run(req: Request, res: Response): Promise<void> {
    try {
      const payments = await this.getAllPaymentUseCase.run();
      console.log(payments);
      if (payments)
        res.status(200).send({
          status: "success",
          data: payments.map((payment: any) => {
            return {
              id: payment.id,
              name: payment.name,
              payed: payment.payed
            };
          }),
        });
      else
        res.status(400).send({
          status: "error",
          msn: "Ocurrio algún problema",
        });
    } catch (error) {
      res.status(204).send({
        status: "error",
        data: "Ocurrio un error",
        msn: error,
      });
    }
  }
}
