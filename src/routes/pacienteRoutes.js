const express = require("express");
const paciente = require("../controllers/pacienteController");
const router = express.Router();

router.get("/", paciente.listarPacientes);

module.exports = router;