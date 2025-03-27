const express = require("express");
const Depoimento = require("../controllers/depoimentosController");
const router = express.Router();

router.get("/", Depoimento.listarDepoimentos);
router.get("/:id", Depoimento.buscarDepoimentosPorId);
router.post("/", Depoimento.criarDepoimentos);
router.put("/:id", Depoimento.atualizarDepoimentos);
router.delete("/:id", Depoimento.excluirDepoimentos);

module.exports = router;