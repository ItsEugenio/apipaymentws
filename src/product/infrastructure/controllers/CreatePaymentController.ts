import { Request, Response } from "express";

import { CreatePaymentUseCase } from "../../application/CreatePaymentUseCase";


export class CreatePaymentController {
  constructor(readonly createPaymentUseCase: CreatePaymentUseCase) {}

  async run(req: Request, res: Response) {
    const data = req.body;
    try {
      const payed = true
      const dataJSON = JSON.parse(data)
      const payment = await this.createPaymentUseCase.run(
        dataJSON.name,
        payed
      );

      if (payment)
        res.status(201).send({
          status: "success",
          data: {
            id: payment?.id,
            name: payment?.name,
            payed: payment?.payed,
          },
        });
      else
        res.status(204).send({
          status: "error",
          data: "NO fue posible agregar el registro",
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
