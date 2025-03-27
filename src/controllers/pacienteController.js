import * as Paciente from '../models/pacienteModel.js';

export const listarPacientes = async(req, res) => {
    try {
        const pacientes = await Paciente.listarPacientes();
        req.status(200).json(pacientes);
    } catch (error) {
        res.status(500).json({erro: erro.message || "Erro na hora de listar!"});
    };
};

export const buscarPacientesPorId = async (req, res) => {
    try {
        const { id } = req.params;
        const paciente = await Paciente.buscarPacientesPorId(Number(id));
        res.status(200).json(paciente);
    } catch (error) {
        res.status(404).json({error: error.message || "Erro na hora de buscar!"});
    };
};

export const criarPacientes = async(req, res) => {
    try {
        const { nomeCompleto, genero, idade, principaisQueixas, usoDeMedicamentos, objetivoDaTerapia, historicoFamiliar, atendimentos, depoimentos } = req.body;
        const novoPaciente = await Paciente.criarPacientes(nomeCompleto, genero, idade, principaisQueixas, usoDeMedicamentos, objetivoDaTerapia, historicoFamiliar, atendimentos, depoimentos);
        res.status(201).json(novoPaciente);
    } catch (erro) {
        res.status(500).json({error: erro.message || "Erro na hora de criar!"});
    };
};

export const atualizarPacientes = async (req, res) => {
    try {
        const { id } = req.params;
        const { nomeCompleto, genero, idade, principaisQueixas, usoDeMedicamentos, objetivoDaTerapia, historicoFamiliar, atendimentos, depoimentos } = req.body;

        if (!nomeCompleto || !genero || !idade || !principaisQueixas || !usoDeMedicamentos || !objetivoDaTerapia || !historicoFamiliar) {
            return res.status(400).json({ error: "Campos obrigatórios não preenchidos."})
        };

        const pacienteAtualizado = await Paciente.atualizarPacientes(Number(id), { nomeCompleto, genero, idade, principaisQueixas, usoDeMedicamentos, objetivoDaTerapia, historicoFamiliar, atendimentos, depoimentos });
        res.status(201).json(pacienteAtualizado);
    } catch (error) {
        res.status(500).json({error: error.message || "Erro na hora de atualizar!"});
    };
};

export const excluirPacientes = async (req, res) => {
    try {
        const { id } = req.params;
        await Paciente.excluirPacientes(Number(id));
        res.status(204).send();
    } catch (error) {
        res.status(500).json({error: error.message || "Erro na hora de excluir!"});
    };
};