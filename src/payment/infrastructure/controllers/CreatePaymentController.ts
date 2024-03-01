import { Request, Response } from "express";

import { CreatePaymentUseCase } from "../../application/CreatePaymentUseCase";


export class CreatePaymentController {
  constructor(readonly createPaymentUseCase: CreatePaymentUseCase) {}

  async run(req: Request, res: Response) {
    let data = req.body;
    console.log('como llegan al create', data)
    try {
      const payed = true
      const payment = await this.createPaymentUseCase.run(
        data.messageJSON.id + "-" + data.messageJSON.name, payed
      );
      console.log('tipoPayment', typeof(payment))

      if (payment){ 
        res.status(201).send({
          status: "success",
          data: {
            id: payment?.id,
            name: payment?.name,
            payed: payment?.payed,
          },
        });
        console.log('dataCreate',payment)
      }
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
