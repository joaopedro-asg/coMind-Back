import express from 'express';
import * as Depoimento from '../controllers/depoimentosController.js';
const router = express.Router();

router.get("/", Depoimento.listarDepoimentos);
router.get("/:id", Depoimento.buscarDepoimentosPorId);
router.post("/", Depoimento.criarDepoimentos);
router.put("/:id", Depoimento.atualizarDepoimentos);
router.delete("/:id", Depoimento.excluirDepoimentos);

export default router;