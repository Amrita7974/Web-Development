import dotenv from "dotenv";
dotenv.config();
import express from "express";

import AuthRouter from "./src/routers/auth.route.js";
import PublicRouter from "./src/routers/public.route.js";
import connectDB from "./src/config/dbConnection.config.js";

const app = express();

app.use(express.json());

app.use("/auth",AuthRouter);
app.use("/public",PublicRouter)
app.get("/", (req, res) => {
  console.log("Default Get API Hit");
  res.json({ message: "Welcome to my first backend project" });
});

// app.post("/login",(req,res) => {
//     res.json({ message: "Login Sucessfull"});
// });
const port = process.env.port || 5000;

app.listen(port, () => {
  console.log("Server Started on port:",port);
  connectDB();
});
