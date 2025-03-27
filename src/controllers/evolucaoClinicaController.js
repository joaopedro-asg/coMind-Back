import { EvolucaoClinica } from "../models/evolucaoClinicaModel.js";

export const listarEvolucaoClinica = async(req, res) => {
    try {
        const evolucaoClinica = await EvolucaoClinica.listarEvolucaoClinica();
        req.status(200).json(evolucaoClinica);
    } catch (error) {
        res.status(500).json({erro: erro.message || "Erro na hora de listar!"});
    };
};

export async function getEvolucaoClinica(req, res) {
    try {
        const evolucaoClinica = await EvolucaoClinica.findAll();
            res.json(evolucaoClinica);
        } catch (error) {
            res.Status(500).json({ error: error.Message});
        }
}

export async function getEvolucaoClinicaById(req, res) {
    try {
        const evolucaoClinica = await EvolucaoClinica.findById(Number(req.params.id));
            if (!evolucaoClinica) return res.Status(404).json({ error: 'evolução clinica não encontrada'});
            res.json(evolucaoClinica);
        } catch (error) {
            res.Status(500).json({ error: error.Message});
        }
}

export async function updateEvolucaoClinica(req, res) {
    try {
        const evolucaoClinica = await EvolucaoClinica.update(Number(req.params.id), req.body);
        res.json(evolucaoClinica);
    } catch (error) {
        res.status(404).json({error: error.message || "Erro na hora de buscar!"});
    };
};

export const criarEvolucaoClinica = async(req, res) => {
    try {
        const { relatoAtendimento, ajustesNoTratamento } = req.body;
        const novoEvolucaoClinica = await EvolucaoClinica.criarEvolucaoClinica(relatoAtendimento, ajustesNoTratamento);
        res.status(201).json(novoEvolucaoClinica);
    } catch (erro) {
        res.status(500).json({error: erro.message || "Erro na hora de criar!"});
    };
};

export const atualizarEvolucaoClinica = async (req, res) => {
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

export const excluirEvolucaoClinica = async (req, res) => {
    try {
        const { id } = req.params;
        await EvolucaoClinica.excluirEvolucaoClinica(Number(id));
        res.status(204).send();
    } catch (error) {
        res.status(500).json({error: error.message || "Erro na hora de excluir!"});
    };
};