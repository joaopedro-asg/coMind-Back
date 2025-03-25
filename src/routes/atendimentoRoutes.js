import express from "express";
import{
    createAtendimento,
    getAtendimento,
    getAtendimentoById,
    updateAtendimento,
    deleteAtendimento,
} from '../controllers/atendimentoController';

const router = express.Router();

router.post('/atendimento', createAtendimento);
router.get('/atendimento', getAtendimento);
router.get('/atendimento', getAtendimentoById);
router.put('atendimento', updateAtendimento);
router.delete('atendimento', deleteAtendimento);

export default router;