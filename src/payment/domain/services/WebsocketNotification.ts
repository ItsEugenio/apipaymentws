import { Payment } from "../Payment"; 

export interface WebsocketNotification {
    sendNotificationwebsocket(payment: Payment): Promise<boolean>;
}