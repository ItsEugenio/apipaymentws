    import { Payment } from "../Payment"; 

export interface SendSocketNotification {
    sendonotiweb(payment: Payment): Promise<boolean>;
}