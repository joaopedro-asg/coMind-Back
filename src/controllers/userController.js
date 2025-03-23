import '../models/userModel.js';

//MARK: - CRUD
export const listarUsuario = async (req, res) => {
    try {
        const usuarios = await user.listarUsuario();
        res.json(usuarios);
    }
    catch (error) {
        console.error('ERRO AO LISTAR USUÁRIOS:', error);
        res.status(500).json({ error: error.message || "Erro ao listar usuários" });
    }
};

export const buscarUsuarioPorId = async (req, res) => {
    try {
        const { id } = req.params;
        const usuario = await user.buscarUsuarioPorId(Number(id));
        res.json(usuario);
    }
    catch (error) {
        console.error('ERRO AO BUSCAR USUÁRIO:', error);
        res.status(404).json({ error: error.message || "Usuário não encontrado" });
    }
};

export const buscarUsuarioPorEmail = async (req, res) => {
    try {
        const { email } = req.params;
        const usuario = await user.buscarUsuarioPorEmail(email);
        res.json(usuario);
    }
    catch (error) {
        console.error('ERRO AO BUSCAR USUÁRIO:', error);
        res.status(404).json({ error: error.message || "Usuário não encontrado" });
    }
};

//CREATE
export const criarUsuario = async (req, res) => {
    try {
        const { nomeusario, email, senha, tipo } = req.body;

        if (!nomeusario || !email || !senha || !tipo) {
            return res.status(400).json({ error: "Nome, email, senha e tipo são obrigatórios" });
        }

        if (tipo !== 'PACIENTE' && tipo !== 'PROFISSIONAL') {
            return res.status(400).json({ error: "Tipo de usuário inválido" });
        }

        const usuarioExistente = await user.buscarUsuarioPorEmail(email);
        if (usuarioExistente) {
            return res.status(400).json({ error: "Email já cadastrado" });
        }

        const novoUsuario = await user.criarUsuario({
            nomeusario,
            email,
            senha,
            tipo
        });
        res.status(201).json(novoUsuario);
    }
    catch (error) {
        console.error('ERRO AO CRIAR USUÁRIO:', error);
        res.status(500).json({ error: error.message || "Erro ao criar usuário" });
    }
};

//UPDATE/PUT
export const atualizarUsuario = async (req, res) => {
    try {
        const { id } = req.params;
        const { nomeusario, email, senha, tipo } = req.body;

        if (!nomeusario || !email || !senha || !tipo) {
            return res.status(400).json({ error: "Nome, email, senha e tipo são obrigatórios" });
        }

        const usuarioAtualizado = await user.atualizarUsuario(Number(id), {
            nomeusario,
            email,
            senha,
            tipo
        });

        res.json(usuarioAtualizado);
    }
    catch (error) {
        console.error('ERRO AO ATUALIZAR USUÁRIO:', error);
        res.status(500).json({ error: error.message || "Erro ao atualizar usuário" });
    }
};

//DELETE
export const excluirUsuario = async (req, res) => {
    try {
        const { id } = req.params;
        await user.excluirUsuario(Number(id));
        res.status(204).json({ message: "Usuario excluído com sucesso" });
    } catch (error) {
        console.error('ERRO AO EXCLUIR USUÁRIO:', error);
        res.status(500).json({ error: error.message || "Erro ao excluir usuário" });
    }
};

