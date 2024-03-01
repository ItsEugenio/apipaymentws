import { Socket } from 'socket.io-client'
import io from "socket.io-client"

import { Payment } from "../../domain/Payment";
import { WebsocketNotification } from "../../domain/services/WebsocketNotification";

export class NotificationWebsocketPayment implements WebsocketNotification {
  private url: any;
  constructor() {
    this.url = process.env.SOCKET_URL || 'http://localhost:5000';
  }

  async sendNotificationwebsocket(payment: Payment): Promise<boolean> {
    const socket: Socket = io(this.url);
    let conn = false;

    socket.on("connect", () =>{
        conn = true;
        console.log('conectado al websocket')
        socket.emit("apiEvent", {
            name:payment.name,
            payed: payment.payed
        });
        socket.on('disconnect', () => {
            console.log('Cliente WebSocket desconectado');
          });
          socket.on('error', (error: Error) => {
            console.error('Cliente WebSocket desconectado: ',error.message);
            console.log('hubo un error')
          });
    })
    return conn
  }
}
