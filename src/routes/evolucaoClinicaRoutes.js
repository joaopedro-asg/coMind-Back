import express from "express";
import{
    createEvolucaoClinica,
    getevolucaoClinica,
    getevolucaoClinicaById,
    getevolucaoClinica,
    updateEvolucaoClinica,
    deleteEvolucaoClinica,
} from '../controllers/evolucaoClinicaController';

const router = express.Router();

router.post('/evolucaoClinica', createEvolucaoClinica);
router.get('/evolucaoClinica', getevolucaoClinica);
router.get('/evolucaoClinica', getevolucaoClinicaById);
router.put('evolucaoClinica', updateEvolucaoClinica);
router.delete('evolucaoClinica', deleteEvolucaoClinica);

export default router;