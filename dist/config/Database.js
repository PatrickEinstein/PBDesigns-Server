import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const ConnectDatabse = (app, PORT, uri
// conn: Connection | null
) => {
    mongoose
        .connect(uri)
        .then(async () => {
        console.log("DB connected");
    })
        .then(app.listen(PORT, async (req, res) => {
        console.log(`Server is running on port http://localhost:${PORT}/api/docs`);
    }))
        .catch((err) => console.log(err));
    // process.on("beforeExit", (data) => {
    //   console.log("closing connection==>", data);
    //   conn?.close();
    // });
};
export default ConnectDatabse;
