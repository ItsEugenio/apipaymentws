import { query } from "../../database/mysql";
import { Service } from "../domain/Service";
import { ServiceRepository } from "../domain/ServiceRepository";

export class MysqlServiceRepository implements ServiceRepository {
  async getAll(): Promise<Service[] | null> {
    const sql = "SELECT * FROM service";
    try {
      const [data]: any = await query(sql, []);
      const dataService = Object.values(JSON.parse(JSON.stringify(data)));

      return dataService.map(
        (service: any) =>
          new Service(
            service.id,
            service.name
          )
      );
    } catch (error) {
      return null;
    }
  }

  async getById(userId: number): Promise<Service | null> {
    const sql = "SELECT * FROM service WHERE id=?";
    const params: any[] = [userId];
    try {
      const [result]: any = await query(sql, params);
      return new Service(
        result[0].id,
        result[0].name
      );
    } catch (error) {
      return null;
    }
  }

  async createService(prod: Service): Promise<Service | null> {
    let service = null;
    const sql =
      "INSERT INTO service (name) VALUES (?)";
    const params: any[] = [prod.name];
    try {
      const [result]: any = await query(sql, params);
      service = new Service(
        result.insertId,
        prod.name,
      );
    } catch (error) {
      service = null;
    } finally {
      return service;
    }
  }
}
