import { Request, Response } from "express";

import { GetByIdServiceUseCase } from "../../application/GetByIdServiceUseCase";

export class GetByIdServiceController {
  constructor(readonly getByIdServiceUseCase: GetByIdServiceUseCase) {}

  async run(req: Request, res: Response) {
    const id: number = parseInt(req.params.id);
    try {
      const service = await this.getByIdServiceUseCase.run(id);
      if (service)
        res.status(200).send({
          status: "success",
          data: {
            id: service.id,
            name: service.name
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
