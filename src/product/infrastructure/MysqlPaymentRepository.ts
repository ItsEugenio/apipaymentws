import { query } from "../../database/mysql";
import { Payment } from "../domain/Payment";
import { PaymentRepository } from "../domain/PaymentRepository";

export class MysqlPaymentRepository implements PaymentRepository {
  async getAll(): Promise<Payment[] | null> {
    const sql = "SELECT * FROM payment";
    try {
      const [data]: any = await query(sql, []);
      const dataPayment = Object.values(JSON.parse(JSON.stringify(data)));

      return dataPayment.map(
        (payment: any) =>
          new Payment(
            payment.id,
            payment.name,
            payment.payed
          )
      );
    } catch (error) {
      return null;
    }
  }

  async getById(userId: number): Promise<Payment | null> {
    const sql = "SELECT * FROM payment WHERE id=?";
    const params: any[] = [userId];
    try {
      const [result]: any = await query(sql, params);
      //El objeto Result es un objeto que contiene info generada de la bd
      /*No es necesaria la validación de la cantidad de filas afectadas, ya que, al
            estar dentro de un bloque try/catch si hay error se captura en el catch */
      return new Payment(
        result[0].id,
        result[0].name,
        result[0].payed
      );
    } catch (error) {
      return null;
    }
  }

  async createPayment(prod: Payment): Promise<Payment | null> {
    let payment = null;
    const sql =
      "INSERT INTO payment (name, payed) VALUES (?, ?)";
    const params: any[] = [prod.name, prod.payed];
    try {
      const [result]: any = await query(sql, params);
      //El objeto Result es un objeto que contiene info generada de la bd
      /*No es necesaria la validación de la cantidad de filas afectadas, ya que, al
            estar dentro de un bloque try/catch si hay error se captura en el catch */
      payment = new Payment(
        result.insertId,
        prod.name,
        prod.payed
      );
    } catch (error) {
      payment = null;
    } finally {
      return payment;
    }
  }
}
