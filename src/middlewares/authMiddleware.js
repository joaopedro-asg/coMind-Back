import jwt from "jsonwebtoken";

export const authenticate = (req, res, next) => {
  try {
    const authHeader = req.header("Authorization");
    
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ error: "Acesso negado: Token não fornecido ou inválido" });
    }

    const token = authHeader.replace("Bearer ", "");
    const verified = jwt.verify(token, process.env.JWT_SECRET);

    req.user = verified;
    next();
  } catch (error) {
    return res.status(403).json({ error: "Token inválido ou expirado" });
  }
};

export const verificarAdmin = (req, res, next) => {
    if (!req.user || req.user.userType !== "ADMIN") {
        return res
            .status(403)
            .json({ message: "Acesso restrito a administradores." });
    }
    next();
};

export const verificarProfissional = (req, res, next) => {
    if (!req.user || req.user.userType !== "PROFISSIONAL") {
        return res
            .status(403)
            .json({ message: "Acesso restrito a profissionais." });
    }
    next();
};

export const verificarPaciente = (req, res, next) => {
    if (!req.user || req.user.userType !== "PACIENTE") {
        return res
            .status(403)
            .json({ message: "Acesso restrito a pacientes." });
    }
    next();
};