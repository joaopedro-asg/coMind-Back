import express from 'express';
import * as Atendimentos from '../controllers/atendimentoController.js';
const router = express.Router();

router.get("/", Atendimentos.listarAtendimentos);
router.get("/:id", Atendimentos.buscarAtendimentosPorId);
router.post("/", Atendimentos.criarAtendimentos);
router.put("/:id", Atendimentos.atualizarAtendimentos);
router.delete("/:id", Atendimentos.excluirAtendimentos);

export default router;