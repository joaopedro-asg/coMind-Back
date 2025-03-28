import * as Profissional from '../models/profissionalModel.js';

export const listarProfissional = async(req, res) => {
    try {
        const profissionais = await Profissional.listarProfissional();
        res.status(200).json(profissionais);
    } catch (error) {
        res.status(500).json({ error: error.message || "Erro ao listar profissionais" });
    };
};

export const buscarProfissionalPorId = async (req, res) => {
    try {
        const { id } = req.params;
        const profissional = await Profissional.buscarProfissionalPorId(Number(id));
        
        if (!profissional) {
            return res.status(404).json({ error: "Profissional não encontrado" });
        }
        
        res.status(200).json(profissional);
    } catch (error) {
        res.status(500).json({ error: error.message || "Erro ao buscar profissional" });
    };
};

export const criarProfissional = async (req, res) => {
    try {
        const { usuarioID, nomeCompleto, matricula, genero, bio, formacoes, 
                especialidade, faixaEtaria, preco, regiao, foto, 
                diasAtendimento, quantAtendimentosGratuitos } = req.body;

        if (!nomeCompleto || typeof nomeCompleto !== 'string' || nomeCompleto.trim() === '') {
            return res.status(400).json({ error: "Nome completo é obrigatório" });
        }
        
        if (!matricula || typeof matricula !== 'string' || matricula.trim() === '') {
            return res.status(400).json({ error: "Matrícula profissional é obrigatória" });
        }
        
        if (!genero) {
            return res.status(400).json({ error: "Gênero é obrigatório" });
        }
        
        if (!usuarioID) {
            return res.status(400).json({ error: "ID de usuário é obrigatório" });
        }


        //TODO: VALIDAR MATRICULA
        const novoProfissional = await Profissional.criarProfissional({
            usuarioID,
            nomeCompleto: nomeCompleto.trim(), 
            matricula: matricula.trim(),
            genero, 
            bio: bio?.trim() || "",
            formacoes: formacoes?.trim() || "",
            especialidade: Array.isArray(especialidade) ? especialidade : [],
            faixaEtaria: Array.isArray(faixaEtaria) ? faixaEtaria : [],
            preco: Math.max(0, Number(preco) || 0),
            regiao: regiao?.trim() || "",
            foto: foto?.trim() || "",
            diasAtendimento: Array.isArray(diasAtendimento) ? diasAtendimento : [],
            quantAtendimentosGratuitos: Math.max(0, Number(quantAtendimentosGratuitos) || 0),
            atendimentos: [],
            evolucoesClinicas: [],
            gruposApoio: []
        });

        res.status(201).json(novoProfissional);
    } catch (error) {
        console.error("Erro ao criar profissional:", error);
        res.status(500).json({ error: error.message || "Erro interno ao criar profissional" });
    }
};

export const atualizarProfissional = async (req, res) => {
    try {
        const { id } = req.params;
        const dadosAtualizacao = req.body;

        if (!dadosAtualizacao.nomeCompleto || !dadosAtualizacao.matricula || !dadosAtualizacao.genero) {
            return res.status(400).json({ error: "Campos obrigatórios não preenchidos" });
        }

        if (dadosAtualizacao.especialidade && !Array.isArray(dadosAtualizacao.especialidade)) {
            dadosAtualizacao.especialidade = [];
        }
        if (dadosAtualizacao.faixaEtaria && !Array.isArray(dadosAtualizacao.faixaEtaria)) {
            dadosAtualizacao.faixaEtaria = [];
        }
        if (dadosAtualizacao.diasAtendimento && !Array.isArray(dadosAtualizacao.diasAtendimento)) {
            dadosAtualizacao.diasAtendimento = [];
        }

        const profissionalAtualizado = await Profissional.atualizarProfissional(
            Number(id), 
            dadosAtualizacao
        );

        if (!profissionalAtualizado) {
            return res.status(404).json({ error: "Profissional não encontrado" });
        }

        res.status(200).json(profissionalAtualizado);
    } catch (error) {
        res.status(500).json({ error: error.message || "Erro ao atualizar profissional" });
    };
};

export const excluirProfissional = async (req, res) => {
    try {
        const { id } = req.params;
        const deletado = await Profissional.excluirProfissional(Number(id));
        
        if (!deletado) {
            return res.status(404).json({ error: "Profissional não encontrado" });
        }
        
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message || "Erro ao excluir profissional" });
    };
};