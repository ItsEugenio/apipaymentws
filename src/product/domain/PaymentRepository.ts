import { Payment } from "./Payment";

export interface PaymentRepository {
  getAll(): Promise<Payment[] | null>;
  getById(userId: number): Promise<Payment | null>;
  createPayment(payment: Payment): Promise<Payment | null>;
}
