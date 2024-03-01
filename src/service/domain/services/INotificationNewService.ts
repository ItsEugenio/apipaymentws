import { Service } from "../Service";

export interface INotificationNewService {
  sendNotification(service: Service): Promise<boolean>;
}
