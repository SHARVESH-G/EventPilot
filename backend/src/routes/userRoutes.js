import express from "express";
import { getUserByEmail } from "../controlls/userController.js";

const userRouter = express.Router();

userRouter.get("/:email", getUserByEmail);

export default userRouter;