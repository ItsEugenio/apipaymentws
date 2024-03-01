import { Request, Response } from "express";

import { GetAllServiceUseCase } from "../../application/GetAllServiceUseCase";

export class GetAllServiceController {
  constructor(readonly getAllServiceUseCase: GetAllServiceUseCase) {}

  async run(req: Request, res: Response): Promise<void> {
    try {
      const service = await this.getAllServiceUseCase.run();
      console.log(service);
      if (service)
        res.status(200).send({
          status: "success",
          data: service.map((service: any) => {
            return {
              id: service.id,
              name: service.name
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
