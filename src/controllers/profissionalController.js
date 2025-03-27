const Profissional = require("../models/profissionalModel");

exports.listarProfissional = async(req, res) => {
    try {
        const profissional = await Profissional.listarProfissional();
        req.status(200).json(profissional);
    } catch (error) {
        res.status(500).json({erro: erro.message || "Erro na hora de listar!"});
    };
};

exports.buscarProfissionalPorId = async (req, res) => {
    try {
        const { id } = req.params;
        const profissional = await Profissional.buscarProfissionalPorId(Number(id));
        res.status(200).json(profissional);
    } catch (error) {
        res.status(404).json({error: error.message || "Erro na hora de buscar!"});
    };
};

exports.criarProfissional = async(req, res) => {
    try {
        const { nomeCompleto, matricula, genero, bio, formacoes, especialidade, faixaEtaria, preco, regiao, foto, diasAtendimento, quantAtendimentosGratuitos } = req.body;
        const novoProfissional = await Profissional.criarProfissional(nomeCompleto, matricula, genero, bio, formacoes, especialidade, faixaEtaria, preco, regiao, foto, diasAtendimento, quantAtendimentosGratuitos);
        res.status(201).json(novoProfissional);
    } catch (erro) {
        res.status(500).json({error: erro.message || "Erro na hora de criar!"});
    };
};

exports.atualizarProfissional = async (req, res) => {
    try {
        const { id } = req.params;
        const { nomeCompleto, matricula, genero, bio, formacoes, especialidade, faixaEtaria, preco, regiao, foto, diasAtendimento, quantAtendimentosGratuitos } = req.body;

        if (!nomeCompleto || !matricula || !genero || !bio || !formacoes || !especialidade || !faixaEtaria || !preco || !regiao || !foto || !diasAtendimento || !quantAtendimentosGratuitos) {
            return res.status(400).json({ error: "Campos obrigatórios não preenchidos."})
        };

        const profissionalAtualizado = await Profissional.atualizarProfissional(Number(id), { nomeCompleto, matricula, genero, bio, formacoes, especialidade, faixaEtaria, preco, regiao, foto, diasAtendimento, quantAtendimentosGratuitos });
        res.status(201).json(profissionalAtualizado);
    } catch (error) {
        res.status(500).json({error: error.message || "Erro na hora de atualizar!"});
    };
};

exports.excluirProfissional = async (req, res) => {
    try {
        const { id } = req.params;
        await Profissional.excluirProfissional(Number(id));
        res.status(204).send();
    } catch (error) {
        res.status(500).json({error: error.message || "Erro na hora de excluir!"});
    };
};