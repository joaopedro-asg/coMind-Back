import prisma from '../prisma.js';

export const listarDepoimentos = async () => {
    return await prisma.depoimentos.findMany();
};

export const buscarDepoimentosPorId = async (id) => {
    const depoimento = await prisma.depoimentos.findUnique({
        where: { id }
    });
    if (!depoimento) {
        throw new Error('Depoimento não encontrado...');
    };
    return depoimento;
};

export const criarDepoimentos = async (nome, local, texto) => {
    return await prisma.depoimentos.create({
        data:
        {
            nome, 
            local, 
            texto  
        }
    });
};

export const atualizarDepoimentos = async (id, { nome, local, texto }) => {
    const depoimento = await prisma.depoimentos.findUnique({
        where: { id }
    });
    if (!depoimento) {
        throw new Error('Depoimento não atualizado...');
    };
    return await prisma.depoimentos.update({
        where: { id },
        data: { nome, local, texto }
    });
};

export const excluirDepoimentos = async (id) => {
    const depoimento = await prisma.depoimentos.findUnique({
        where: { id }
    });
    if (!depoimento) {
        throw new Error('Depoimento não encontrado...');
    };

    await prisma.depoimentos.delete({
        where: { id }
    });
};