import * as usuario from '../models/userModel.js';

// MARK: - CRUD
export const listarUsuario = async (req, res) => {
    try {
        const usuarios = await usuario.listarUsuario();
        res.json(usuarios);
    } catch (error) {
        console.error('ERRO AO LISTAR USUÁRIOS:', error);
        res.status(500).json({ error: error.message || "Erro ao listar usuários" });
    }
};

export const buscarUsuarioPorId = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await usuario.buscarUsuarioPorId(Number(id));
        res.json(user);
    } catch (error) {
        console.error('ERRO AO BUSCAR USUÁRIO:', error);
        res.status(404).json({ error: error.message || "Usuário não encontrado" });
    }
};

export const buscarUsuarioPorEmail = async (req, res) => {
    try {
        const { email } = req.params;
        const user = await usuario.buscarUsuarioPorEmail(email);
        res.json(user);
    } catch (error) {
        console.error('ERRO AO BUSCAR USUÁRIO POR EMAIL:', error);
        res.status(404).json({ error: error.message || "Usuário não encontrado" });
    }
};

// CREATE
export const cadastrarUsuario = async (req, res) => {
    try {
        const user = await usuario.criarUsuario(req.body);
        res.status(201).json(user);
    } catch (error) {
        console.error('ERRO AO CADASTRAR USUÁRIO:', error);
        res.status(500).json({ error: error.message || 'Erro ao cadastrar usuário' });
    }
};

// UPDATE
export const atualizarUsuario = async (req, res) => {
    try {
        const { id } = req.params;
        const { nomeusario, email, senha, tipo } = req.body;

        if (!nomeusario || !email || !senha || !tipo) {
            return res.status(400).json({ error: "Nome, email, senha e tipo são obrigatórios" });
        }

        const userAtualizado = await usuario.atualizarUsuario(Number(id), {
            nomeusario,
            email,
            senha,
            tipo
        });

        res.json(userAtualizado);
    } catch (error) {
        console.error('ERRO AO ATUALIZAR USUÁRIO:', error);
        res.status(500).json({ error: error.message || "Erro ao atualizar usuário" });
    }
};

// DELETE
export const excluirUsuario = async (req, res) => {
    try {
        const { id } = req.params;
        await usuario.excluirUsuario(Number(id));
        res.status(204).send();
    } catch (error) {
        console.error('ERRO AO EXCLUIR USUÁRIO:', error);
        res.status(500).json({ error: error.message || "Erro ao excluir usuário" });
    }
};