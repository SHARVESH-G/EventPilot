import express from "express";
import { registerUser } from "../controlls/authController.js";

const router = express.Router();

router.post("/register", registerUser);

export default router;
