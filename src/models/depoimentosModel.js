
export const listarDepoimentos = async () => {
    return await prisma.Depoimento.findMany();
};

export const buscarDepoimentosPorId = async (id) => {
    const depoimento = await prisma.Depoimento.findUnique({
        where: { id }
    });
    if (!depoimento) {
        throw new Error('Depoimento não encontrado...');
    };
    return depoimento;
};

export const criarDepoimentos = async (nome, local, texto) => {
    return await prisma.Depoimento.create({
        data:
        {
            nome, 
            local, 
            texto  
        }
    });
};

export const atualizarDepoimentos = async (id, { nome, local, texto }) => {
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

export const excluirDepoimentos = async (id) => {
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