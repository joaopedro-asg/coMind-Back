import express from 'express';
import * as GruposApoio from '../controllers/gruposApoioController.js';
import * as authMiddleware from '../middlewares/authMiddleware.js';

const router = express.Router();

router.use(authMiddleware.authenticate);

router.get("/", authMiddleware.authenticate, GruposApoio.listarGruposApoio);
router.get("/:id", authMiddleware.authenticate, GruposApoio.buscarGruposApoioPorId);
router.post("/", authMiddleware.verificarProfissional, GruposApoio.criarGruposApoio);
router.put("/:id", authMiddleware.verificarProfissional, GruposApoio.atualizarGruposApoio);
router.delete("/:id", authMiddleware.authenticate, GruposApoio.excluirGruposApoio);

export default router;