import prisma from '../prisma.js'

export const listarGruposApoio = async () => {
    return await prisma.gruposApoio.findMany();
};

export const buscarGruposApoioPorId = async (id) => {
    const gruposApoio = await prisma.gruposApoio.findUnique({
        where: { id }
    });
    if (!gruposApoio) {
        throw new Error('Grupo não encontrado...');
    };
    return gruposApoio;
};

export const criarGruposApoio = async (tipo, descricao, local) => {
    return await prisma.gruposApoio.create({
        data:
        {
            tipo,
            descricao,
            local 
        }
    });
};

export const atualizarGruposApoio = async (id, { tipo, descricao, local }) => {
    const gruposApoio = await prisma.gruposApoio.findUnique({
        where: { id }
    });
    if (!gruposApoio) {
        throw new Error('Grupo não atualizado...');
    };
    return await prisma.gruposApoio.update({
        where: { id },
        data: { tipo, descricao, local }
    });
};

export const excluirGruposApoio = async (id) => {
    const gruposApoio = await prisma.gruposApoio.findUnique({
        where: { id }
    });
    if (!gruposApoio) {
        throw new Error('Grupo não excluído...');
    };

    await prisma.gruposApoio.delete({
        where: { id }
    });
};