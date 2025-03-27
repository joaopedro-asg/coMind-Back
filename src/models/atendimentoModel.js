import prisma from '../prisma.js'

export const listarAtendimentos = async () => {
    return await prisma.atendimento.findMany();
};

export const buscarAtendimentosPorId = async (id) => {
    const atendimentos = await prisma.atendimento.findUnique({
        where: { id }
    });
    if (!atendimentos) {
        throw new Error('Atendimento não encontrado...');
    };
    return gruposApoio;
};

export const criarAtendimentos = async (status) => {
    return await prisma.atendimento.create({
        data:
        {
            status 
        }
    });
};

export const atualizarAtendimentos = async (id, { status }) => {
    const atendimentos = await prisma.atendimento.findUnique({
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

export const excluirAtendimentos = async (id) => {
    const atendimentos = await prisma.atendimento.findUnique({
        where: { id }
    });
    if (!atendimentos) {
        throw new Error('Atendimento não excluído...');
    };

    await prisma.atendimento.delete({
        where: { id }
    });
};