const Paciente = require("../models/pacienteModel");

exports.listarPacientes = async(req, res) => {
    try {
        const pacientes = await Paciente.listarPacientes();
        req.status(200).json(pacientes);
    } catch (error) {
        res.status(500).json({erro: erro.message || "Erro na hora de listar!"});
    };
};

exports.buscarPacientePorId = async (req, res) => {
    try {
        const { id } = req.params;
        const paciente = await Paciente.buscarPacientePorId(Number(id));
        res.status(200).json(paciente);
    } catch (error) {
        res.status(404).json({error: error.message || "Erro na hora de buscar!"});
    };
};

exports.criarPacientes = async(req, res) => {
    try {
        const { nomeCompleto, genero, idade, principaisQueixas, usoDeMedicamentos, objetivoDaTerapia, historicoFamiliar, atendimentos, depoimentos } = req.body;
        const novoPaciente = await Paciente.criarPacientes(nomeCompleto, genero, idade, principaisQueixas, usoDeMedicamentos, objetivoDaTerapia, historicoFamiliar, atendimentos, depoimentos);
        res.status(201).json(novoPaciente);
    } catch (erro) {
        res.status(500).json({error: erro.message || "Erro na hora de criar!"});
    };
};

exports.atualizarPacientes = async (req, res) => {
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

exports.excluirPaciente = async (req, res) => {
    try {
        const { id } = req.params;
        await Paciente.excluirPaciente(Number(id));
        res.status(204).send();
    } catch (error) {
        res.status(500).json({error: error.message || "Erro na hora de excluir!"});
    };
};