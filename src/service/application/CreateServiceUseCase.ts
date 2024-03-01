import { Service } from "../domain/Service";
import { ServiceRepository } from "../domain/ServiceRepository";
import { NotificationServiceUSeCase } from "./Services/NotificationNewService";

export class CreateServiceUseCase {
  constructor(
    readonly serviceRepository: ServiceRepository,
    readonly sendNotification: NotificationServiceUSeCase
  ) {}

  async run(
    name: string
  ): Promise<Service | null> {
    const service = new Service(0,name);
    try {
      const product = await this.serviceRepository.createService(service);
      if (product)
        this.sendNotification.run(product);
      return product;
    } catch (error) {
      return null;
    }
  }
}
