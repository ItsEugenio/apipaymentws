import { Payment } from "../domain/Payment";
import { PaymentRepository } from "../domain/PaymentRepository";

export class GetAllPaymentUseCase {
  constructor(readonly paymentRepository: PaymentRepository) {}

  async run(): Promise<Payment[] | null> {
    try {
      const result = await this.paymentRepository.getAll();
      console.log(result);
      return result;
    } catch (error) {
      return null;
    }
  }
}
