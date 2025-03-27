import express from 'express';
import * as Profissional from '../controllers/profissionalController.js';
import * as authMiddleware from '../middlewares/authMiddleware.js';

const router = express.Router();

router.use(authMiddleware.authenticate);

router.get("/", authMiddleware.authenticate, Profissional.listarProfissional);
router.get("/:id", authMiddleware.authenticate, Profissional.buscarProfissionalPorId);
router.post("/", authMiddleware.authenticate, Profissional.criarProfissional);
router.put("/:id", authMiddleware.authenticate, Profissional.atualizarProfissional);
router.delete("/:id", authMiddleware.authenticate, Profissional.excluirProfissional);

export default router;