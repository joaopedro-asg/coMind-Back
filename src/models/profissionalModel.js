const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const Profissional = {
  create: (data) => prisma.profissional.create({ data }),

  findMany: () => prisma.profissional.findMany({
    include: { usuario: true }
  }),

  findUnique: (id) => prisma.profissional.findUnique({
    where: { id: parseInt(id) },
    include: { usuario: true, atendimentos: true, gruposApoio: true, evolucoesClinicas: true }
  }),

  update: (id, data) => prisma.profissional.update({
    where: { id: parseInt(id) },
    data,
    include: { usuario: true, atendimentos: true, gruposApoio: true, evolucoesClinicas: true }
  }),
  
  delete: (id) => prisma.profissional.delete({ where: { id: parseInt(id) } }),
};

module.exports = Profissional;
