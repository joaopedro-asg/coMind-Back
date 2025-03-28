import * as usuarioModel from '../models/userModel.js';

export const getProfile = async (req, res) => {
    try {
        const userId = req.user.id;

        const usuario = await usuarioModel.buscarUsuarioPorId(userId);

        const response = {
            success: true,
            user: {
                id: usuario.id,
                nome: usuario.nomeUsario,
                email: usuario.email,
                tipo: usuario.tipo
            },
            //Se existir o tipo específico, aqui ele vai mostrar os dados adicionais
            ...(usuario.paciente && { paciente: usuario.paciente }),
            ...(usuario.profissional && { profissional: usuario.profissional })
        };

        return res.json(response);

    } catch (error) {
        console.error('ERRO NO PERFIL:', error);
        return res.status(error.message.includes('não encontrado') ? 404 : 500).json({
            success: false,
            error: 'PERFIL_ERROR',
            message: error.message.includes('não encontrado') 
                ? 'Perfil não encontrado' 
                : 'Erro ao carregar perfil'
        });
    }
};

export const updateProfile = async (req, res) => {
    try {
        const updated = await usuarioModel.atualizarUsuario(req.user.id, {
            nomeUsario: req.body.nomeUsario,
            email: req.body.email,
            ...(req.body.senha && { senha: req.body.senha })
        });

        const { senha, ...safeData } = updated;
        return res.json({ success: true, user: safeData });

    } catch (error) {
        console.error('ERRO AO ATUALIZAR:', error);
        return res.status(500).json({
            success: false,
            error: 'UPDATE_ERROR',
            message: error.message.includes('não encontrado') 
                ? 'Usuário não existe' 
                : 'Falha na atualização'
        });
    }
};