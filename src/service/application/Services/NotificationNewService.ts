import { Service } from "../../domain/Service";
import { NotificationNewService } from "../../infrastructure/servicesRabbitMQ/NotificationNewProduct";

export class NotificationServiceUSeCase {
  constructor(readonly serviceNotifiacion: NotificationNewService) {}

  async run(service: Service) {
    await this.serviceNotifiacion.sendNotification(service);
  }
}
