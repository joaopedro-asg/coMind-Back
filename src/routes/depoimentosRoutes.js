import express from 'express';
import * as Depoimento from '../controllers/depoimentosController.js';
import * as authMiddleware from '../middlewares/authMiddleware.js';

const router = express.Router();

router.use(authMiddleware.authenticate);

router.get("/", authMiddleware.authenticate, Depoimento.listarDepoimentos);
router.get("/:id", authMiddleware.authenticate, Depoimento.buscarDepoimentosPorId);
router.post("/", authMiddleware.verificarPaciente, Depoimento.criarDepoimentos);
router.put("/:id", authMiddleware.verificarPaciente, Depoimento.atualizarDepoimentos);
router.delete("/:id", authMiddleware.authenticate, Depoimento.excluirDepoimentos);

export default router;