import express from 'express';
import * as Paciente from '../controllers/pacienteController.js';
const router = express.Router();

router.get("/", Paciente.listarPacientes);
router.get("/:id", Paciente.buscarPacientesPorId);
router.post("/", Paciente.criarPacientes);
router.put("/:id", Paciente.atualizarPacientes);
router.delete("/:id", Paciente.excluirPacientes);

export default router;