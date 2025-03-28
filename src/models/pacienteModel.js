import prisma from "../prisma.js";

export const listarPacientes = async () => {
  return await prisma.paciente.findMany();
};

export const buscarPacientesPorId = async (id) => {
  const paciente = await prisma.paciente.findUnique({
    where: { usuarioID: Number(id) },
    include: {
      usuario: {
        select: {
          nomeUsario: true,
          email: true,
          tipo: true,
        },
      },
    },
  });

  if (!paciente) {
    return res.status(404).json({ error: "Paciente não encontrado" });
  }
  return paciente;
};

export const criarPacientes = async (data) => {
    return await prisma.paciente.create({
      data: {
        usuarioID: data.usuarioID,
        nomeCompleto: data.nomeCompleto,
        genero: data.genero,
        idade: data.idade,
        principaisQueixas: data.principaisQueixas,
        usoDeMedicamentos: data.usoDeMedicamentos,
        objetivoDaTerapia: data.objetivoDaTerapia,
        historicoFamiliar: data.historicoFamiliar,
        atendimentos: { create: [] },
        evolucoesClinicas: { create: [] },
      }
    });
  };

export const atualizarPacientes = async (
  id,
  {
    usuarioID,
    nomeCompleto,
    genero,
    idade,
    principaisQueixas,
    usoDeMedicamentos,
    objetivoDaTerapia,
    historicoFamiliar,
    atendimentos,
    evolucoesClinicas,
    depoimentos,
  }
) => {
  const paciente = await prisma.paciente.findUnique({
    where: { id },
  });
  if (!paciente) {
    throw new Error("Paciente não atualizado...");
  }
  return await prisma.paciente.update({
    where: { id },
    data: {
      usuarioID,
      nomeCompleto,
      genero,
      idade,
      principaisQueixas,
      usoDeMedicamentos,
      objetivoDaTerapia,
      historicoFamiliar,
      atendimentos,
      evolucoesClinicas,
      depoimentos,
    },
  });
};

export const excluirPacientes = async (id) => {
  const paciente = await prisma.paciente.findUnique({
    where: { id },
  });
  if (!paciente) {
    throw new Error("Paciente não excluído...");
  }

  await prisma.paciente.delete({
    where: { id },
  });
};
