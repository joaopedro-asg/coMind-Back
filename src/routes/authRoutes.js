import express from "express";
import { registrarUsuario, autenticarUsuario } from "../auth/authService.js";

const router = express.Router();

router.post("/register", registrarUsuario);
router.post("/login", autenticarUsuario);

export default router;