import { Payment } from "../domain/Payment";
import { PaymentRepository } from "../domain/PaymentRepository";
import { IEcryptService } from "./Services/IEncryptService";
import { NotificationPaymentUSeCase } from "./Services/NotificationNewPayment";

export class CreatePaymentUseCase {
  constructor(
    readonly paymentRepository: PaymentRepository,
    readonly encryptPassword: IEcryptService,
    readonly sendNotification: NotificationPaymentUSeCase
  ) {}

  async run(
    name: string,
    payed: boolean
  ): Promise<Payment | null> {
  
    const payme = new Payment(0, name,payed);
    try {
      const payment = await this.paymentRepository.createPayment(payme);
      if (payment)
        //Se valida que la creación del recurso sea exitosa
        this.sendNotification.run(payment);
      return payment;
    } catch (error) {
      return null;
    }
  }
}
