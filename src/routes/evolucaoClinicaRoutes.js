import express from "express";
import * as evolucaoController from '../controllers/evolucaoClinicaController.js';

const router = express.Router();

router.post('/evolucaoClinica', evolucaoController.createEvolucaoClinica);
router.get('/evolucaoClinica', evolucaoController.getEvolucaoClinica);
router.get('/evolucaoClinica/:id', evolucaoController.getEvolucaoClinicaById);
router.put('/evolucaoClinica/:id', evolucaoController.updateEvolucaoClinica);
router.delete('/evolucaoClinica/:id', evolucaoController.deleteEvolucaoClinica);

export default router;
