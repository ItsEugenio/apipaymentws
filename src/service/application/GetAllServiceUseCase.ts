import { Service } from "../domain/Service";
import { ServiceRepository } from "../domain/ServiceRepository";

export class GetAllServiceUseCase {
  constructor(readonly serviceRepository: ServiceRepository) {}

  async run(): Promise<Service[] | null> {
    try {
      const result = await this.serviceRepository.getAll();
      console.log(result);
      return result;
    } catch (error) {
      return null;
    }
  }
}
