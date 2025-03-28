import prisma from '../prisma.js'

export const listarEvolucaoClinica = async () => {
    return await prisma.evolucaoClinica.findMany();
};

export const buscarEvolucaoClinicaPorId = async (id) => {
    const evolucaoClinica = await prisma.evolucaoClinica.findUnique({
        where: { id }
    });
    if (!evolucaoClinica) {
        throw new Error('Evolução Clínica não encontrada...');
    };
    return evolucaoClinica;
};

export const criarEvolucaoClinica = async (pacienteID, profissionalID, relatoAtendimento, ajustesNoTratamento) => {
    return await prisma.evolucaoClinica.create({
        data:
        {
            pacienteID, 
            profissionalID, 
            relatoAtendimento, 
            ajustesNoTratamento 
        }
    });
};

export const atualizarEvolucaoClinica = async (id, { pacienteID, profissionalID, relatoAtendimento, ajustesNoTratamento }) => {
    const evolucaoClinica = await prisma.evolucaoClinica.findUnique({
        where: { id }
    });
    if (!evolucaoClinica) {
        throw new Error('Evolução Clínica não atualizado...');
    };
    return await prisma.evolucaoClinica.update({
        where: { id },
        data: { pacienteID, profissionalID, relatoAtendimento, ajustesNoTratamento }
    });
};

export const excluirEvolucaoClinica = async (id) => {
    const evolucaoClinica = await prisma.evolucaoClinica.findUnique({
        where: { id }
    });
    if (!evolucaoClinica) {
        throw new Error('Evolução Clínica não excluída...');
    };

    await prisma.evolucaoClinica.delete({
        where: { id }
    });
};