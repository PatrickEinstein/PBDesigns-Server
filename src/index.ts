import express, { RequestHandler } from "express";
import http from "http";
import cors from "cors";
import path from "path";
import ConnectDatabse from "./config/Database.js";
import swaggerUi from "swagger-ui-express";
import swaggerconfig from "./config/SwaggerUiDocs.js";
import dotenv from "dotenv";

dotenv.config();
import { Server } from "socket.io";
import upload from "./config/Multer.js";
import helmet from "helmet";

import { KeepAlive } from "./config/KeepAwake.js";
import BlogsRouter from "./Routes/BlogsRoute.js";
import GalleryRouter from "./Routes/GalleryRoutes.js";
import { RabbitMQService } from "./Services/RabbitMQService.js";


const app = express();
const server = http.createServer(app);
const __dirname = path.dirname(new URL(import.meta.url).pathname).slice(1);

console.log(__dirname);
app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(upload.any()); //THIS IS MULTER JUST IN CASE I WILL BE NEEDING IT
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST", "PUT"],
  },
});



app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerconfig));

app.get("/api/docs.json", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.send(swaggerconfig);
});
app.get("/", (req, res) => {
  res.json("WELCOME");
});

const rabbitConn = new RabbitMQService();
const { conn, channel } = await rabbitConn.Connect();

// Production of message
channel?.sendToQueue("Hello5", Buffer.from("Heloooooo"));

// Consumption of message
channel?.assertQueue("Hello5", { durable: true });
channel?.consume("Hello5", (message) => {
  console.log(message?.content.toString());
}, {noAck: true});


app.use("/", BlogsRouter);
app.use("/", GalleryRouter);

const PORT: number = process.env.PORT ? parseInt(process.env.PORT, 10) : 5000;
const uri: string = process.env.DB_URI ? process.env.DB_URI : "";

ConnectDatabse(server, PORT, uri, conn);
KeepAlive();
