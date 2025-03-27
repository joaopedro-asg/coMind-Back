import express from 'express';
import * as Profissional from '../controllers/profissionalController.js';
const router = express.Router();

router.get("/", Profissional.listarProfissional);
router.get("/:id", Profissional.buscarProfissionalPorId);
router.post("/", Profissional.criarProfissional);
router.put("/:id", Profissional.atualizarProfissional);
router.delete("/:id", Profissional.excluirProfissional);

export default router;