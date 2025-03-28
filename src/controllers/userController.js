import * as usuario from '../models/userModel.js';

// MARK: - CRUD
export const listarUsuario = async (req, res) => {
    try {
        const usuarios = await usuario.listarUsuario();
        const usuariosSemSenha = usuarios.map(user => {
            const { senha, ...usuarioSemSenha } = user;
            return usuarioSemSenha;
        });
        res.json(usuariosSemSenha);
    } catch (error) {
        console.error('ERRO AO LISTAR USUÁRIOS:', error);
        res.status(500).json({ error: 'Erro interno ao listar usuários' });
    }
};

export const buscarUsuarioPorId = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await usuario.buscarUsuarioPorId(Number(id));
        
        if (!user) {
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }

        const { senha, ...userSemSenha } = user;
        res.json(userSemSenha);

    } catch (error) {
        console.error('ERRO AO BUSCAR USUÁRIO:', error);
        res.status(500).json({ error: error.message || 'Erro ao buscar usuário' });
    }
};

export const buscarUsuarioPorEmail = async (req, res) => {
    try {
        const { email } = req.params;
        const user = await usuario.buscarUsuarioPorEmail(email);

        if (!user) {
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }

        res.json(user);

    } catch (error) {
        console.error('ERRO AO BUSCAR USUÁRIO POR EMAIL:', error);
        res.status(500).json({ error: 'Erro interno ao buscar usuário' });
    }
};

// CREATE (com validação de tipo)
export const cadastrarUsuario = async (req, res) => {
    try {
        const { nomeUsario, email, senha, tipo, ...dadosExtras } = req.body;

        if (!nomeUsario || !email || !senha || !tipo) {
            return res.status(400).json({ error: 'Campos obrigatórios faltando' });
        }

        if (tipo === 'PACIENTE') {
            if (!dadosExtras.nomeCompleto) {
                return res.status(400).json({ error: 'Pacientes devem fornecer nome completo' });
            }
        } else if (tipo === 'PROFISSIONAL') {
            if (!dadosExtras.matricula) {
                return res.status(400).json({ error: 'Profissionais devem fornecer matrícula' });
            }
        }

        const novoUsuario = await usuario.criarUsuario({
            nomeUsario,
            email,
            senha,
            tipo,
            ...dadosExtras
        });

        const usuarioCompleto = await usuario.buscarUsuarioPorId(novoUsuario.id);
        
        const { senha: _, ...usuarioCriado } = usuarioCompleto;
        res.status(201).json(usuarioCriado);

    } catch (error) {
        console.error('ERRO AO CADASTRAR USUÁRIO:', error);
        
        if (error.code === 'P2002') {
            return res.status(400).json({ error: 'Email já cadastrado' });
        }

        res.status(500).json({ 
            error: 'Erro interno ao cadastrar usuário',
            details: process.env.NODE_ENV === 'development' ? error.message : undefined
        });
    }
};

// UPDATE
export const atualizarUsuario = async (req, res) => {
    try {
        const { id } = req.params;
        const { nomeUsario, email, senha, tipo } = req.body;

        if (!nomeUsario || !email || !senha || !tipo) {
            return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
        }

        const userAtualizado = await usuario.atualizarUsuario(Number(id), {
            nomeUsario,
            email,
            senha,
            tipo
        });

        const { senha: _, ...usuarioSemSenha } = userAtualizado;
        res.json(usuarioSemSenha);

    } catch (error) {
        console.error('ERRO AO ATUALIZAR USUÁRIO:', error);
        
        if (error.message.includes('não encontrado')) {
            return res.status(404).json({ error: error.message });
        }

        res.status(500).json({ error: 'Erro interno ao atualizar usuário' });
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
        
        if (error.message.includes('não encontrado')) {
            return res.status(404).json({ error: error.message });
        }

        res.status(500).json({ error: 'Erro interno ao excluir usuário' });
    }
};