const express = require("express");
const EvolucaoClinica = require("../controllers/evolucaoClinicaController");
const router = express.Router();

router.get("/", EvolucaoClinica.listarEvolucaoClinica);
router.get("/:id", EvolucaoClinica.buscarEvolucaoClinicaPorId);
router.post("/", EvolucaoClinica.criarEvolucaoClinica);
router.put("/:id", EvolucaoClinica.atualizarEvolucaoClinica);
router.delete("/:id", EvolucaoClinica.excluirEvolucaoClinica);

module.exports = router;