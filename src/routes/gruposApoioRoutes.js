const express = require("express");
const GruposApoio = require("../controllers/gruposApoioController");
const router = express.Router();

router.get("/", GruposApoio.listarGruposApoio);
router.get("/:id", GruposApoio.buscarGruposApoioPorId);
router.post("/", GruposApoio.criarGruposApoio);
router.put("/:id", GruposApoio.atualizarGruposApoio);
router.delete("/:id", GruposApoio.excluirGruposApoio);

module.exports = router;