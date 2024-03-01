import { Payment } from "../../domain/Payment";
import { NotificationWebsocketPayment } from '../../infrastructure/websocket/WebsocketNotification'

export class NotificationWebsocketPaymentUseCase {
  constructor(readonly paymentNotifiacion: NotificationWebsocketPayment) {}

  async run(payment: Payment) {
    await this.paymentNotifiacion.sendNotificationwebsocket(payment);
  }
}
