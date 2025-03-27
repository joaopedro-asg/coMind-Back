const prisma = require("../prisma");

const listarEvolucaoClinica = async () => {
    return await prisma.EvolucaoClinica.findMany();
};

const buscarEvolucaoClinicaPorId = async (id) => {
    const evolucaoClinica = await prisma.EvolucaoClinica.findUnique({
        where: { id }
    });
    if (!evolucaoClinica) {
        throw new Error('Evolução Clínica não encontrada...');
    };
    return gruposApoio;
};

const criarEvolucaoClinica = async (relatoAtendimento, ajustesNoTratamento) => {
    return await prisma.EvolucaoClinica.create({
        data:
        {
            relatoAtendimento,
            ajustesNoTratamento 
        }
    });
};

const atualizarEvolucaoClinica = async (id, { relatoAtendimento, ajustesNoTratamento }) => {
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

const excluirEvolucaoClinica = async (id) => {
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

module.exports = {listarEvolucaoClinica, buscarEvolucaoClinicaPorId, criarEvolucaoClinica, atualizarEvolucaoClinica, excluirEvolucaoClinica };