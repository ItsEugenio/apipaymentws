import express from "express";
import morgan from "morgan";
import { Signale } from "signale";
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config()

import { loadRouter } from "./event/LoadRouter";
import { paymentRouter } from "./payment/infrastructure/PaymentRouter";

const corsOptions: cors.CorsOptions = {
    origin: '*',
    methods: ['GET','POST','PUT','DELETE']
}

const app = express();

app.use(cors(corsOptions))

const signale = new Signale();

const SERVER_PORT = process.env.SERVER_PORT || 3000;

app.use(express.json());
app.use(morgan("dev"));
app.use("/payment", paymentRouter);
app.use("/load", loadRouter);

app.listen(SERVER_PORT, () => {
  signale.success("Server online in port 3000");
});
