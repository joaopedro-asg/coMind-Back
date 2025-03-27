const prisma = require("../prisma");

const listarAtendimentos = async () => {
    return await prisma.Atendimentos.findMany();
};

const buscarAtendimentosPorId = async (id) => {
    const atendimentos = await prisma.Atendimentos.findUnique({
        where: { id }
    });
    if (!atendimentos) {
        throw new Error('Atendimento não encontrado...');
    };
    return gruposApoio;
};

const criarAtendimentos = async (status) => {
    return await prisma.Atendimentos.create({
        data:
        {
            status 
        }
    });
};

const atualizarAtendimentos = async (id, { status }) => {
    const atendimentos = await prisma.Atendimentos.findUnique({
        where: { id }
    });
    if (!atendimentos) {
        throw new Error('Atendimento não atualizado...');
    };
    return await prisma.Atendimentos.update({
        where: { id },
        data: { status }
    });
};

const excluirAtendimentos = async (id) => {
    const atendimentos = await prisma.Atendimentos.findUnique({
        where: { id }
    });
    if (!atendimentos) {
        throw new Error('Atendimento não excluído...');
    };

    await prisma.Atendimentos.delete({
        where: { id }
    });
};

module.exports = {listarAtendimentos, buscarAtendimentosPorId, criarAtendimentos, atualizarAtendimentos, excluirAtendimentos };