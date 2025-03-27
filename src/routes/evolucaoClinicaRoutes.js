import express from "express";
import * as evolucaoController from '../controllers/evolucaoClinicaController.js';
import * as authMiddleware from '../middlewares/authMiddleware.js';

const router = express.Router();

router.use(authMiddleware.authenticate);

router.post('/', authMiddleware.authenticate, evolucaoController.criarEvolucaoClinica);
router.get('/', authMiddleware.authenticate, evolucaoController.listarEvolucaoClinica);
router.get('/evolucaoClinica/:id', authMiddleware.verificarProfissional, evolucaoController.buscarEvolucaoClinicaPorId);
router.put('/evolucaoClinica/:id', authMiddleware.authenticate, evolucaoController.atualizarEvolucaoClinica);
router.delete('/evolucaoClinica/:id',authMiddleware.authenticate, evolucaoController.excluirEvolucaoClinica);

export default router;