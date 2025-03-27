const EvolucaoClinica = require("../models/evolucaoClinicaModel");

exports.listarEvolucaoClinica = async(req, res) => {
    try {
        const evolucaoClinica = await EvolucaoClinica.listarEvolucaoClinica();
        req.status(200).json(evolucaoClinica);
    } catch (error) {
        res.status(500).json({erro: erro.message || "Erro na hora de listar!"});
    };
};

exports.buscarEvolucaoClinicaPorId = async (req, res) => {
    try {
        const { id } = req.params;
        const evolucaoClinica = await EvolucaoClinica.buscarEvolucaoClinicaPorId(Number(id));
        res.status(200).json(evolucaoClinica);
    } catch (error) {
        res.status(404).json({error: error.message || "Erro na hora de buscar!"});
    };
};

exports.criarEvolucaoClinica = async(req, res) => {
    try {
        const { relatoAtendimento, ajustesNoTratamento } = req.body;
        const novoEvolucaoClinica = await EvolucaoClinica.criarEvolucaoClinica(relatoAtendimento, ajustesNoTratamento);
        res.status(201).json(novoEvolucaoClinica);
    } catch (erro) {
        res.status(500).json({error: erro.message || "Erro na hora de criar!"});
    };
};

exports.atualizarEvolucaoClinica = async (req, res) => {
    try {
        const { id } = req.params;
        const { relatoAtendimento, ajustesNoTratamento } = req.body;

        if (!relatoAtendimento || !ajustesNoTratamento) {
            return res.status(400).json({ error: "Campos obrigatórios não preenchidos."})
        };

        const evolucaoClinicaAtualizado = await EvolucaoClinica.atualizarEvolucaoClinica(Number(id), { relatoAtendimento, ajustesNoTratamento });
        res.status(201).json(evolucaoClinicaAtualizado);
    } catch (error) {
        res.status(500).json({error: error.message || "Erro na hora de atualizar!"});
    };
};

exports.excluirEvolucaoClinica = async (req, res) => {
    try {
        const { id } = req.params;
        await EvolucaoClinica.excluirEvolucaoClinica(Number(id));
        res.status(204).send();
    } catch (error) {
        res.status(500).json({error: error.message || "Erro na hora de excluir!"});
    };
};