import express from "express";
import * as auth from "../auth/authService.js";

const router = express.Router();

router.post("/register", auth.registrarUsuario);
router.post("/login", auth.autenticarUsuario);

export default router;