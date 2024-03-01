import amqplib from "amqplib";

import { Service } from "../../domain/Service";
import { INotificationNewService } from "../../domain/services/INotificationNewService";

export class NotificationNewService implements INotificationNewService {
  private options: any;
  private url: any;
  private exch: any;


  constructor() {
    this.options = {
      vhost: process.env.AMQP_VHOST,
      username: process.env.AMQP_USERNAME,
      password: process.env.AMQP_PASSWORD,
      port: process.env.AMQP_PORT,
    };
    this.url = process.env.AMQP_URL;
    this.exch = process.env.AMQP_EXCH;
  }

  async sendNotification(service: Service): Promise<boolean> {
    const conn = await amqplib.connect(this.url, this.options);
    const serviceJSON = JSON.stringify(service)
    const ch = await conn.createChannel();
    const status = await ch.publish(this.exch, "", Buffer.from(serviceJSON));
    return status;
  }
}
