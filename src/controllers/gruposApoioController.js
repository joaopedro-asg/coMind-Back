const GruposApoio = require("../models/gruposApoioModel");

exports.listarGruposApoio = async(req, res) => {
    try {
        const gruposApoio = await GruposApoio.listarGruposApoio();
        req.status(200).json(gruposApoio);
    } catch (error) {
        res.status(500).json({erro: erro.message || "Erro na hora de listar!"});
    };
};

exports.buscarGruposApoioPorId = async (req, res) => {
    try {
        const { id } = req.params;
        const gruposApoio = await GruposApoio.buscarGruposApoioPorId(Number(id));
        res.status(200).json(gruposApoio);
    } catch (error) {
        res.status(404).json({error: error.message || "Erro na hora de buscar!"});
    };
};

exports.criarGruposApoio = async(req, res) => {
    try {
        const { tipo, descricao, local } = req.body;
        const novoGruposApoio = await GruposApoio.criarGruposApoio(tipo, descricao, local);
        res.status(201).json(novoGruposApoio);
    } catch (erro) {
        res.status(500).json({error: erro.message || "Erro na hora de criar!"});
    };
};

exports.atualizarGruposApoio = async (req, res) => {
    try {
        const { id } = req.params;
        const { tipo, descricao, local } = req.body;

        if (!tipo || !descricao || !local) {
            return res.status(400).json({ error: "Campos obrigatórios não preenchidos."})
        };

        const gruposApoioAtualizado = await GruposApoio.atualizarGruposApoio(Number(id), { tipo, descricao, local });
        res.status(201).json(gruposApoioAtualizado);
    } catch (error) {
        res.status(500).json({error: error.message || "Erro na hora de atualizar!"});
    };
};

exports.excluirGruposApoio = async (req, res) => {
    try {
        const { id } = req.params;
        await GruposApoio.excluirGruposApoio(Number(id));
        res.status(204).send();
    } catch (error) {
        res.status(500).json({error: error.message || "Erro na hora de excluir!"});
    };
};