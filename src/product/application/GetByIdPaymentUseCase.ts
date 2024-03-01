import { Payment } from "../domain/Payment";
import { PaymentRepository } from "../domain/PaymentRepository";

export class GetByIdPaymentUseCase {
  constructor(readonly paymentRepository: PaymentRepository) {}

  async run(id: number): Promise<Payment | null> {
    try {
      const result = await this.paymentRepository.getById(id);
      return result;
    } catch (error) {
      return null;
    }
  }
}
