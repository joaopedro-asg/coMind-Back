import express from 'express';
import * as EvolucaoClinica from '../controllers/evolucaoClinicaController.js';
const router = express.Router();

router.get("/", EvolucaoClinica.listarEvolucaoClinica);
router.get("/:id", EvolucaoClinica.buscarEvolucaoClinicaPorId);
router.post("/", EvolucaoClinica.criarEvolucaoClinica);
router.put("/:id", EvolucaoClinica.atualizarEvolucaoClinica);
router.delete("/:id", EvolucaoClinica.excluirEvolucaoClinica);

export default router;