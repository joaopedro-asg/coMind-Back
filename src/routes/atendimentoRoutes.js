import express from 'express';
import * as Atendimentos from '../controllers/atendimentoController.js';
import * as authMiddleware from '../middlewares/authMiddleware.js';

const router = express.Router();

router.use(authMiddleware.authenticate);

router.get("/", authMiddleware.authenticate, Atendimentos.listarAtendimentos);
router.get("/:id", authMiddleware.authenticate, Atendimentos.buscarAtendimentosPorId);
router.post("/", authMiddleware.authenticate, Atendimentos.criarAtendimentos);
router.put("/:id", authMiddleware.authenticate, Atendimentos.atualizarAtendimentos);
router.delete("/:id", authMiddleware.authenticate, Atendimentos.excluirAtendimentos);

export default router;