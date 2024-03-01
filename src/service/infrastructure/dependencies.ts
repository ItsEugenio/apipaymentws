import { CreateServiceUseCase } from "../application/CreateServiceUseCase";
import { GetAllServiceUseCase } from "../application/GetAllServiceUseCase";
import { GetByIdServiceUseCase } from "../application/GetByIdServiceUseCase";
import { NotificationServiceUSeCase } from "../application/Services/NotificationNewService";
import { CreateServiceController } from "./controllers/CreateServiceController";
import { GetAllServiceController } from "./controllers/GetAllServiceController";
import { GetByIdServiceController } from "./controllers/GetByIdServiceController";
import { EncryptService } from "./helpers/EncryptService";
import { MysqlServiceRepository } from "./MysqlServiceRepository";
import { NotificationNewService } from "./servicesRabbitMQ/NotificationNewProduct";

export const mysqlServiceRepository = new MysqlServiceRepository();
export const servicesNotification = new NotificationNewService();
export const encryptPassword = new EncryptService();
export const serviceNotificationUseCase = new NotificationServiceUSeCase(
  servicesNotification
);
export const createServiceUseCase = new CreateServiceUseCase(
  mysqlServiceRepository,
  serviceNotificationUseCase
);
export const getAllUseCase = new GetAllServiceUseCase(mysqlServiceRepository);
export const getByIdServiceUseCase = new GetByIdServiceUseCase(
  mysqlServiceRepository
);
export const createServiceController = new CreateServiceController(
  createServiceUseCase
);
export const getAllServiceController = new GetAllServiceController(
  getAllUseCase
);
export const getByIdServiceController = new GetByIdServiceController(
  getByIdServiceUseCase
);