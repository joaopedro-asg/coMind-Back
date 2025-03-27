const prisma = require("../prisma");

const listarDepoimentos = async () => {
    return await prisma.Depoimento.findMany();
};

const buscarDepoimentosPorId = async (id) => {
    const depoimento = await prisma.Depoimento.findUnique({
        where: { id }
    });
    if (!depoimento) {
        throw new Error('Depoimento não encontrado...');
    };
    return depoimento;
};

const criarDepoimentos = async (nome, local, texto) => {
    return await prisma.Depoimento.create({
        data:
        {
            nome, 
            local, 
            texto  
        }
    });
};

const atualizarDepoimentos = async (id, { nome, local, texto }) => {
    const depoimento = await prisma.Depoimento.findUnique({
        where: { id }
    });
    if (!depoimento) {
        throw new Error('Depoimento não atualizado...');
    };
    return await prisma.Depoimento.update({
        where: { id },
        data: { nome, local, texto }
    });
};

const excluirDepoimentos = async (id) => {
    const depoimento = await prisma.Depoimento.findUnique({
        where: { id }
    });
    if (!depoimento) {
        throw new Error('Depoimento não encontrado...');
    };

    await prisma.Depoimento.delete({
        where: { id }
    });
};

module.exports = {listarDepoimentos, buscarDepoimentosPorId, criarDepoimentos, atualizarDepoimentos, excluirDepoimentos};