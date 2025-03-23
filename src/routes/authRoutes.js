import express from "express";
import { registrarUsuario, autenticarUsuario } from "../auth/authService.js";

const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const { nomeUsario, email, senha, tipo } = req.body;
    const novoUsuario = await registrarUsuario(nomeUsario, email, senha, tipo);
    res.status(201).json(novoUsuario);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, senha } = req.body;
    const token = await autenticarUsuario(email, senha);
    res.status(200).json({ token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default router;
