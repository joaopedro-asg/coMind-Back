const express = require("express");
const Paciente = require("../controllers/pacienteController");
const router = express.Router();

router.get("/", Paciente.listarPacientes);
router.get("/:id", Paciente.buscarPacientesPorId);
router.post("/", Paciente.criarPacientes);
router.put("/:id", Paciente.atualizarPacientes);
router.delete("/:id", Paciente.excluirPacientes);

module.exports = router;