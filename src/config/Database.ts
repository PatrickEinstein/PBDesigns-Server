import mongoose from "mongoose";
import { Request, Response } from "express";
import dotenv from "dotenv";
import { Connection } from "amqplib";
dotenv.config();

const ConnectDatabse = (
  app: any,
  PORT: number,
  uri: string
  // conn: Connection | null
) => {
  mongoose
    .connect(uri)
    .then(async () => {
      console.log("DB connected");
    })
    .then(
      app.listen(PORT, async (req: Request, res: Response) => {
        console.log(
          `Server is running on port http://localhost:${PORT}/api/docs`
        );
      })
    )
    .catch((err) => console.log(err));
  // process.on("beforeExit", (data) => {
  //   console.log("closing connection==>", data);
  //   conn?.close();
  // });
};
export default ConnectDatabse;
