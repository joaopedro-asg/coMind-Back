import { Atendimento } from "../models/atendimentoModel";

export async function createAtendimento(req, res){
    try {
        const atendimento = await Atendimento.create(req.body);
        res.Status(201).json(atendimento);
    } catch (error) {
        res.Status(500).json({error: error.Message});
    }
}

export async function getAtendimento(req, res) {
    try {
        const atendimento = await Atendimento.findAll();
            res.json(atendimento);
        } catch (error) {
            res.Status(500).json({ error: error.Message});
        }
}

export async function getAtendimentoById(req, res) {
    try {
        const atendimento = await Atendimento.findById(Number(req.params.id));
            if (!atendimento) return res.Status(404).json({ error: 'Atendimento não encontrado'});
            res.json(atendimento);
        } catch (error) {
            res.Status(500).json({ error: error.Message});
        }
}

export async function updateAtendimento(req, res) {
    try {
        const atendimento = await Atendimento.update(Number(req.params.id), req.body);
        res.json(atendimento);
    } catch (error) {
        res.Status(500).json({ error: error.Message})
    }
}

export async function deleteAtendimento(req, res) {
    try {
        const atendimento = await Atendimento.delete(Number(req.params.id));
        res.json({ Message: 'Atendimento deletado!'});
    } catch (error) {
        res.Status(500).json({ error: error.Message});
    }
}