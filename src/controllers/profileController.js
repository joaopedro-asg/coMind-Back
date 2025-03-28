import * as usuario from '../models/userModel.js';

export const getProfile = async (req, res) => {
    try {
        const userId = req.user.id;
        const user = await usuario.buscarUsuarioPorId(userId);

        if (!user) {
            return res.status(404).json({ error: "Usuário não encontrado" });
        }

        res.json(user);
    } catch (error) {
        console.error('ERRO AO BUSCAR PERFIL:', error);
        res.status(500).json({ error: "Erro ao buscar perfil do usuário" });
    }
};

export const updateProfile = async (req, res) => {
    try {
        const userId = req.user.id;
        const { nomeusario, email, senha } = req.body;

        if (!nomeusario || !email) {
            return res.status(400).json({ error: "Nome e email são obrigatórios" });
        }

        const userAtualizado = await usuario.atualizarUsuario(userId, {
            nomeusario,
            email,
            senha
        });

        res.json(userAtualizado);
    } catch (error) {
        console.error('ERRO AO ATUALIZAR PERFIL:', error);
        res.status(500).json({ error: "Erro ao atualizar perfil" });
    }
};
