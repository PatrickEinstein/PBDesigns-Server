import express from "express";
import http from "http";
import cors from "cors";
import path from "path";
import ConnectDatabse from "./config/Database.js";
import swaggerUi from "swagger-ui-express";
import swaggerconfig from "./config/SwaggerUiDocs.js";
import dotenv from "dotenv";
dotenv.config();
import upload from "./config/Multer.js";
import BlogsRouter from "./Routes/BlogsRoute.js";
import GalleryRouter from "./Routes/GalleryRoutes.js";
// const options = {
//   key: fs.readFileSync('./key.pem'),
//   cert: fs.readFileSync('./cert.pem'),
// };
const app = express();
const server = http.createServer(app);
// const server = https.createServer(options, app)
const __dirname = path.dirname(new URL(import.meta.url).pathname).slice(1);
console.log(__dirname);
app.use(cors({
    origin: '*',
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "Accept"],
}));
app.use(express.json());
// app.use(helmet());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(upload.any());
app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerconfig));
app.get("/api/docs.json", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.send(swaggerconfig);
});
app.get("/", (req, res) => {
    res.json("WELCOME");
});
app.use("/", BlogsRouter);
app.use("/", GalleryRouter);
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 5000;
const uri = process.env.DB_URI ? process.env.DB_URI : "";
ConnectDatabse(server, PORT, uri);
// KeepAlive();
// /Users/Patrick/Desktop/work/PB-S/dist/Routes/BlogsRoute.js
