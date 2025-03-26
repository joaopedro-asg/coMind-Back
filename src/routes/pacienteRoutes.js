const express = require("express");
const Paciente = require("../controllers/pacienteController");
const router = express.Router();

router.get("/", Paciente.listarPacientes);
router.get("/:id", Paciente.buscarPacientePorId);
router.post("/", Paciente.criarPacientes);
router.put("/:id", Paciente.atualizarPacientes);
router.delete("/:id", Paciente.excluirPaciente);

module.exports = router;