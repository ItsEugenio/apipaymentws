import { Service } from "../domain/Service";
import { ServiceRepository } from "../domain/ServiceRepository";

export class GetByIdServiceUseCase {
  constructor(readonly serviceRepository: ServiceRepository) {}

  async run(id: number): Promise<Service | null> {
    try {
      const result = await this.serviceRepository.getById(id);
      return result;
    } catch (error) {
      return null;
    }
  }
}
