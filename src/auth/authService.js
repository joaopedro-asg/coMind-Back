import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import prisma from '../prisma.js';

export const generateToken = (user) => {
  return jwt.sign(
    { id: user.id, email: user.email, tipo: user.tipo }, // Payload
    process.env.JWT_SECRET,
    { expiresIn: '2h' }
  );
};

export const registrarUsuario = async (nome, email, senha, tipo) => {
  console.log('Verificando usuário existente...');
  const usuarioExistente = await prisma.usuario.findUnique({
    where: { email },
  });
  console.log('Usuário existente:', usuarioExistente);

  if (usuarioExistente) {
    throw new Error("Usuário já existe.");
  }

  const senhaHash = await bcrypt.hash(senha, 12); 
  console.log('Senha hash gerada:', senhaHash);

  const novoUsuario = await prisma.usuario.create({
    data: {
      nomeUsario: nome,
      email,
      senha: senhaHash,
      tipo: tipo || "PACIENTE",
    },
  });
  console.log('Novo usuário criado:', novoUsuario);

  return novoUsuario;
};

export const autenticarUsuario = async (email, senha) => {
  const usuario = await prisma.usuario.findUnique({
    where: { email },
  });

  if (!usuario) {
    throw new Error("Usuário não encontrado.");
  }

  const senhaValida = await bcrypt.compare(senha, usuario.senha);
  if (!senhaValida) {
    throw new Error("Senha incorreta.");
  }

  const token = jwt.sign(
    { id: usuario.id, name: usuario.nomeUsario, tipo: usuario.tipo },
    process.env.JWT_SECRET,
    { expiresIn: '2h' }
  );

  return token;
};
