import { Payment } from "../Payment";

export interface INotificationNewPayment {
  sendNotification(payment: Payment): Promise<boolean>;
}
