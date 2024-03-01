import { Service } from "./Service";

export interface ServiceRepository {
  getAll(): Promise<Service[] | null>;
  getById(userId: number): Promise<Service | null>;
  createService(service: Service): Promise<Service | null>;
}
