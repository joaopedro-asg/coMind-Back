import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import prisma from '../prisma.js';
import * as usuarioModel from '../models/userModel.js';

export const generateToken = (user) => {
  return jwt.sign(
    { id: user.id, email: user.email, tipo: user.tipo }, // Payload
    process.env.JWT_SECRET,
    { expiresIn: '2h' }
  );
};

//MARK: - Registro
export const registrarUsuario = async (req, res) => {
  try {
    const { nome, email, senha, tipo = "PACIENTE", ...dadosExtras } = req.body;

    if (!nome || !email || !senha) {
      return res.status(400).json({ error: "Campos obrigatórios faltando" });
    }

    const senhaHash = await bcrypt.hash(senha, 12);

    const novoUsuario = await usuarioModel.criarUsuario({
      nomeUsario: nome,
      email,
      senha: senhaHash,
      tipo,
      ...dadosExtras
    });

    const resposta = {
      success: true,
      message: "Registro concluído",
      user: {
        id: novoUsuario.id,
        nome: novoUsuario.nomeUsario,
        email: novoUsuario.email,
        tipo: novoUsuario.tipo
      }
    };

    res.status(201).json(resposta);

  } catch (error) {
    console.error("ERRO NO REGISTRO:", error);
    
    return res.status(500).json({ error: "Erro interno no servidor." });
  }
};

//MARK: - Autenticar
export const autenticarUsuario = async (req, res) => {
  try {
    const { email, senha } = req.body;

    const usuario = await prisma.usuario.findUnique({
      where: { email },
    });

    if (!usuario) {
      return res.status(404).json({ error: "Usuário não encontrado." });
    }

    const senhaValida = await bcrypt.compare(senha, usuario.senha);
    if (!senhaValida) {
      return res.status(401).json({ error: "Senha incorreta." });
    }

    const token = jwt.sign(
      { id: usuario.id, name: usuario.nomeUsario, tipo: usuario.tipo },
      process.env.JWT_SECRET,
      { expiresIn: '2h' }
    );

    return res.status(200).json({ 
      token,
      tipoUsuario: usuario.tipo,
      user: {
        id: usuario.id,
        nome: usuario.nomeUsario
      }
    });

  } catch (error) {
    console.error("Erro na autenticação:", error);
    return res.status(500).json({ error: "Erro interno no servidor." });
  }
};