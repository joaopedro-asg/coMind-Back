import express from 'express';
import * as GruposApoio from '../controllers/gruposApoioController.js';
const router = express.Router();

router.get("/", GruposApoio.listarGruposApoio);
router.get("/:id", GruposApoio.buscarGruposApoioPorId);
router.post("/", GruposApoio.criarGruposApoio);
router.put("/:id", GruposApoio.atualizarGruposApoio);
router.delete("/:id", GruposApoio.excluirGruposApoio);

export default router;