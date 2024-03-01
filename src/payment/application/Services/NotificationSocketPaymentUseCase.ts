import { Payment } from "../../domain/Payment";
import { NotificationWebsocketPayment } from '../../infrastructure/websocket/WebsocketNotification'

export class NotificationSocketPaymentUseCase {
  constructor(readonly paymentNotifiacion: NotificationWebsocketPayment) {}

  async run(payment: Payment) {
    await this.paymentNotifiacion.sendNotificationwebsocket(payment);
  }
}
