
export const listarEvolucaoClinica = async () => {
    return await prisma.EvolucaoClinica.findMany();
};

export const buscarEvolucaoClinicaPorId = async (id) => {
    const evolucaoClinica = await prisma.EvolucaoClinica.findUnique({
        where: { id }
    });
    if (!evolucaoClinica) {
        throw new Error('Evolução Clínica não encontrada...');
    };
    return gruposApoio;
};

export const criarEvolucaoClinica = async (relatoAtendimento, ajustesNoTratamento) => {
    return await prisma.EvolucaoClinica.create({
        data:
        {
            relatoAtendimento,
            ajustesNoTratamento 
        }
    });
};

export const atualizarEvolucaoClinica = async (id, { relatoAtendimento, ajustesNoTratamento }) => {
    const evolucaoClinica = await prisma.EvolucaoClinica.findUnique({
        where: { id }
    });
    if (!evolucaoClinica) {
        throw new Error('Evolução Clínica não atualizada...');
    };
    return await prisma.EvolucaoClinica.update({
        where: { id },
        data: { relatoAtendimento, ajustesNoTratamento }
    });
};

export const excluirEvolucaoClinica = async (id) => {
    const evolucaoClinica = await prisma.EvolucaoClinica.findUnique({
        where: { id }
    });
    if (!evolucaoClinica) {
        throw new Error('Evolução Clínica não excluída...');
    };

    await prisma.EvolucaoClinica.delete({
        where: { id }
    });
};