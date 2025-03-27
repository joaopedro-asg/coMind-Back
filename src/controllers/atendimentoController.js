import * as Atendimento from '../models/atendimentoModel.js';

export const listarAtendimentos = async(req, res) => {
    try {
        const atendimentos = await Atendimento.listarAtendimentos();
        req.status(200).json(atendimentos);
    } catch (error) {
        res.status(500).json({erro: erro.message || "Erro na hora de listar!"});
    };
};

export const buscarAtendimentosPorId = async (req, res) => {
    try {
        const { id } = req.params;
        const atendimentos = await Atendimento.buscarAtendimentosPorId(Number(id));
        res.status(200).json(atendimentos);
    } catch (error) {
        res.status(404).json({error: error.message || "Erro na hora de buscar!"});
    };
};

export const criarAtendimentos = async(req, res) => {
    try {
        const { status } = req.body;
        const novoAtendimentos = await Atendimento.criarAtendimentos(status);
        res.status(201).json(novoAtendimentos);
    } catch (erro) {
        res.status(500).json({error: erro.message || "Erro na hora de criar!"});
    };
};

export const atualizarAtendimentos = async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;

        if (!status) {
            return res.status(400).json({ error: "Campos obrigatórios não preenchidos."})
        };

        const atendimentosAtualizado = await Atendimento.atualizarAtendimentos(Number(id), { status });
        res.status(201).json(atendimentosAtualizado);
    } catch (error) {
        res.status(500).json({error: error.message || "Erro na hora de atualizar!"});
    };
};

export const excluirAtendimentos = async (req, res) => {
    try {
        const { id } = req.params;
        await Atendimento.excluirAtendimentos(Number(id));
        res.status(204).send();
    } catch (error) {
        res.status(500).json({error: error.message || "Erro na hora de excluir!"});
    };
};