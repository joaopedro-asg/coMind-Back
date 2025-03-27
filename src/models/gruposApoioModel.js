const prisma = require("../prisma");

const listarGruposApoio = async () => {
    return await prisma.GruposApoio.findMany();
};

const buscarGruposApoioPorId = async (id) => {
    const gruposApoio = await prisma.GruposApoio.findUnique({
        where: { id }
    });
    if (!gruposApoio) {
        throw new Error('Grupo não encontrado...');
    };
    return gruposApoio;
};

const criarGruposApoio = async (tipo, descricao, local) => {
    return await prisma.GruposApoio.create({
        data:
        {
            tipo,
            descricao,
            local 
        }
    });
};

const atualizarGruposApoio = async (id, { tipo, descricao, local }) => {
    const gruposApoio = await prisma.GruposApoio.findUnique({
        where: { id }
    });
    if (!gruposApoio) {
        throw new Error('Grupo não atualizado...');
    };
    return await prisma.GruposApoio.update({
        where: { id },
        data: { tipo, descricao, local }
    });
};

const excluirGruposApoio = async (id) => {
    const gruposApoio = await prisma.GruposApoio.findUnique({
        where: { id }
    });
    if (!gruposApoio) {
        throw new Error('Grupo não excluído...');
    };

    await prisma.GruposApoio.delete({
        where: { id }
    });
};

module.exports = {listarGruposApoio, buscarGruposApoioPorId, criarGruposApoio, atualizarGruposApoio, excluirGruposApoio };