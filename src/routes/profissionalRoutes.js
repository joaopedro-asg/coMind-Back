const express = require("express");
const Profissional = require("../controllers/profissionalController");
const router = express.Router();

router.get("/", Profissional.listarProfissional);
router.get("/:id", Profissional.buscarProfissionalPorId);
router.post("/", Profissional.criarProfissional);
router.put("/:id", Profissional.atualizarProfissional);
router.delete("/:id", Profissional.excluirProfissional);

module.exports = router;