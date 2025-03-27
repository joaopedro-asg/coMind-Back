import express from 'express';
import * as Paciente from '../controllers/pacienteController.js';
import * as authMiddleware from '../middlewares/authMiddleware.js';

const router = express.Router();

router.use(authMiddleware.authenticate);

router.get("/", authMiddleware.authenticate, Paciente.listarPacientes);
router.get("/:id", authMiddleware.authenticate, Paciente.buscarPacientesPorId);
router.post("/", authMiddleware.authenticate, Paciente.criarPacientes);
router.put("/:id", authMiddleware.authenticate, Paciente.atualizarPacientes);
router.delete("/:id", authMiddleware.authenticate, Paciente.excluirPacientes);

export default router;