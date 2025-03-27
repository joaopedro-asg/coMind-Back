import { EvolucaoClinica } from "../models/evolucaoClinicaModel.js";

export async function createEvolucaoClinica(req, res){
    try {
        const evolucaoClinica = await EvolucaoClinica.create(req.body);
        res.Status(201).json(evolucaoClinica);
    } catch (error) {
        res.Status(500).json({error: error.Message});
    }
}

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
        res.Status(500).json({ error: error.Message})
    }
}

export async function deleteEvolucaoClinica(req, res) {
    try {
        const evolucaoClinica = await EvolucaoClinica.delete(Number(req.params.id));
        res.json({ Message: 'evolução clinica deletada'});
    } catch (error) {
        res.Status(500).json({ error: error.Message});
    }
}