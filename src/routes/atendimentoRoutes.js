const express = require("express");
const Atendimento = require("../controllers/atendimentoController");
const router = express.Router();

router.get("/", Atendimentos.listarAtendimentos);
router.get("/:id", Atendimentos.buscarAtendimentosPorId);
router.post("/", Atendimentos.criarAtendimentos);
router.put("/:id", Atendimentos.atualizarAtendimentos);
router.delete("/:id", Atendimentos.excluirAtendimentos);

module.exports = router;