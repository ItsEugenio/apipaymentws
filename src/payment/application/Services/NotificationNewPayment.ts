import { Payment } from "../../domain/Payment";
import { NotificationNewPayment } from "../../infrastructure/servicesRabbitMQ/NotificationNewPayment";

export class NotificationPaymentUSeCase {
  constructor(readonly paymentNotifiacion: NotificationNewPayment) {}

  async run(payment: Payment) {
    await this.paymentNotifiacion.sendNotification(payment);
  }
}
