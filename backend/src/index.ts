import { connectDB } from "./util/db";
import cors from "cors";
require("dotenv").config();
import e from "express";

const app = e();
const PORT = process.env.PORT || 3000;
import router from "./Routes/routes";

app.use(cors());
app.use(e.json());

app.use("/", router);

connectDB().then(() =>
  app.listen(PORT, () => {
    console.log("Server Started");
  }),
);
export default { app };
