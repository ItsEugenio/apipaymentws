import { Request, Response } from "express";

import { GetByIdPaymentUseCase } from "../../application/GetByIdPaymentUseCase";

export class GetByIdPaymentController {
  constructor(readonly getByIdPaymentUseCase: GetByIdPaymentUseCase) {}

  async run(req: Request, res: Response) {
    const id: number = parseInt(req.params.id);
    try {
      const payment = await this.getByIdPaymentUseCase.run(id);

      if (payment)
        res.status(200).send({
          status: "success",
          data: {
            id: payment.id,
            name: payment.name,
            payed: payment.payed,

          },
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
