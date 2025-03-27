import * as GruposApoio from '../models/gruposApoioModel.js';

export const listarGruposApoio = async(req, res) => {
    try {
        const gruposApoio = await GruposApoio.listarGruposApoio();
        res.status(200).json(gruposApoio);
    } catch (error) {
        res.status(500).json({erro: error.message || "Erro na hora de listar!"});
    };
};

export const buscarGruposApoioPorId = async (req, res) => {
    try {
        const { id } = req.params;
        const gruposApoio = await GruposApoio.buscarGruposApoioPorId(Number(id));
        res.status(200).json(gruposApoio);
    } catch (error) {
        res.status(404).json({error: error.message || "Erro na hora de buscar!"});
    };
};

export const criarGruposApoio = async(req, res) => {
    try {
        const { profissionalID, tipo, descricao, local } = req.body;
        const novoGruposApoio = await GruposApoio.criarGruposApoio(profissionalID, tipo, descricao, local);
        res.status(201).json(novoGruposApoio);
    } catch (erro) {
        res.status(500).json({error: erro.message || "Erro na hora de criar!"});
    };
};

export const atualizarGruposApoio = async (req, res) => {
    try {
        const { id } = req.params;
        const { profissionalID, tipo, descricao, local } = req.body;

        if (!tipo || !descricao || !local) {
            return res.status(400).json({ error: "Campos obrigatórios não preenchidos."})
        };

        const gruposApoioAtualizado = await GruposApoio.atualizarGruposApoio(Number(id), { profissionalID, tipo, descricao, local });
        res.status(201).json(gruposApoioAtualizado);
    } catch (error) {
        res.status(500).json({error: error.message || "Erro na hora de atualizar!"});
    };
};

export const excluirGruposApoio = async (req, res) => {
    try {
        const { id } = req.params;
        await GruposApoio.excluirGruposApoio(Number(id));
        res.status(204).send();
    } catch (error) {
        res.status(500).json({error: error.message || "Erro na hora de excluir!"});
    };
};