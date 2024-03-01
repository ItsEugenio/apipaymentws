import { Payment } from "../domain/Payment";
import { PaymentRepository } from "../domain/PaymentRepository";

import { NotificationPaymentUSeCase } from "./Services/NotificationNewPayment";
import { NotificationWebsocketPaymentUseCase } from './Services/NotificationWebsocketPaymentUseCase'


export class CreatePaymentUseCase {
  constructor(
    readonly paymentRepository: PaymentRepository,
    readonly sendNotification: NotificationPaymentUSeCase,
    readonly notificationWebsocketPayment: NotificationWebsocketPaymentUseCase
  ) {}

  async run(
    name: string,
    payed: boolean
  ): Promise<Payment | null> {
    const payment = new Payment(0, name,payed);
    try {
      const payed = await this.paymentRepository.createPayment(payment);
      if (payed) {
        this.sendNotification.run(payed);
        this.notificationWebsocketPayment.run(payment);
      }
      return payed;
    } catch (error) {
      return null;
    }
  }
}
