import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectToDB from "./config/dataBase.js";
import router from "./routes/authRoutes.js";

dotenv.config();

const server = express();
const FRONTEND_URL = process.env.FRONTEND_URL
server.use(cors({
  origin: "http://localhost:5173"
}));
server.use(express.json());

const PORT = process.env.PORT;

server.use("/api/auth" , router)

server.listen(PORT, () => {
  connectToDB()
  console.log(`Server Started on Port ${PORT}`);
});
