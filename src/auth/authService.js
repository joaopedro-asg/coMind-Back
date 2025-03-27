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

//MARK: - Registro
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
      usuario: {
        id: usuario.id,
        nome: usuario.nomeUsario
      }
    });

  } catch (error) {
    console.error("Erro na autenticação:", error);
    return res.status(500).json({ error: "Erro interno no servidor." });
  }
};