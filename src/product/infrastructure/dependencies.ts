import { CreatePaymentUseCase } from "../application/CreatePaymentUseCase";
import { GetAllPaymentUseCase } from "../application/GetAllPaymentUseCase";
import { GetByIdPaymentUseCase } from "../application/GetByIdPaymentUseCase";
import { NotificationPaymentUSeCase } from "../application/Services/NotificationNewPayment";
import { CreatePaymentController } from "./controllers/CreatePaymentController";
import { GetAllPaymentController } from "./controllers/GetAllPaymentController";
import { GetByIdPaymentController } from "./controllers/GetByIdPaymentController";
import { EncryptService } from "./helpers/EncryptService";
import { MysqlPaymentRepository } from "./MysqlPaymentRepository";
import { NotificationNewPayment } from "./servicesRabbitMQ/NotificationNewPayment";

export const mysqlPaymentRepository = new MysqlPaymentRepository();
export const servicesNotification = new NotificationNewPayment();
export const encryptPassword = new EncryptService();
export const serviceNotificationUseCase = new NotificationPaymentUSeCase(
  servicesNotification
);
export const createPaymentUseCase = new CreatePaymentUseCase(
  mysqlPaymentRepository,
  encryptPassword,
  serviceNotificationUseCase
);
export const getAllUseCase = new GetAllPaymentUseCase(mysqlPaymentRepository);
export const getByIdPaymentUseCase = new GetByIdPaymentUseCase(
  mysqlPaymentRepository
);
export const createPaymentController = new CreatePaymentController(
  createPaymentUseCase
);
export const getAllPaymentController = new GetAllPaymentController(
  getAllUseCase
);
export const getByIdPaymentController = new GetByIdPaymentController(
  getByIdPaymentUseCase
);
