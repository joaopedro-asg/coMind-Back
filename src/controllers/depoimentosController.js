import * as Depoimento from '../models/depoimentosModel.js';

export const listarDepoimentos = async(req, res) => {
    try {
        const depoimentos = await Depoimento.listarDepoimentos();
        res.status(200).json(depoimentos);
    } catch (error) {
        res.status(500).json({erro: error.message || "Erro na hora de listar!"});
    };
};

export const buscarDepoimentosPorId = async (req, res) => {
    try {
        const { id } = req.params;
        const depoimento = await Depoimento.buscarDepoimentosPorId(Number(id));
        res.status(200).json(paciente);
    } catch (error) {
        res.status(404).json({error: error.message || "Erro na hora de buscar!"});
    };
};

export const criarDepoimentos = async(req, res) => {
    try {
        const { pacienteID, nome, local, texto } = req.body;
        const novoDepoimento = await Depoimento.criarDepoimentos(pacienteID, nome, local, texto);
        res.status(201).json(novoDepoimento);
    } catch (erro) {
        res.status(500).json({error: erro.message || "Erro na hora de criar!"});
    };
};

export const atualizarDepoimentos = async (req, res) => {
    try {
        const { id } = req.params;
        const { pacienteID, nome, local, texto } = req.body;

        if (!local || !texto) {
            return res.status(400).json({ error: "Campos obrigatórios não preenchidos."})
        };

        const depoimentoAtualizado = await Depoimento.atualizarDepoimentos(Number(id), { pacienteID, nome, local, texto });
        res.status(201).json(depoimentoAtualizado);
    } catch (error) {
        res.status(500).json({error: error.message || "Erro na hora de atualizar!"});
    };
};

export const excluirDepoimentos = async (req, res) => {
    try {
        const { id } = req.params;
        await Depoimento.excluirDepoimentos(Number(id));
        res.status(204).send();
    } catch (error) {
        res.status(500).json({error: error.message || "Erro na hora de excluir!"});
    };
};