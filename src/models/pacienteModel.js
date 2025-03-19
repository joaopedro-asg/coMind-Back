const prisma = require("../prisma");

const listarPacientes = async () => {
    return await prisma.Paciente.findMany();
};

const buscarPacientePorId = async (id) => {
    const paciente = await prisma.Paciente.findUnique({
        where: { id }
    });
    if (!paciente) {
        throw new Error('Paciente não encontrado...');
    };
    return paciente;
};

const criarPacientes = async (nomeCompleto, genero, idade, principaisQueixas, usoDeMedicamentos, objetivoDaTerapia, historicoFamiliar, atendimentos, depoimentos) => {
    return await prisma.Paciente.create({
        data:
        {
            nomeCompleto, 
            genero, 
            idade, 
            principaisQueixas, 
            usoDeMedicamentos, 
            objetivoDaTerapia, 
            historicoFamiliar,
            atendimentos,
            depoimentos 
        }
    });
};

const atualizarPacietes = async (id, { nomeCompleto, genero, idade, principaisQueixas, usoDeMedicamentos, objetivoDaTerapia, historicoFamiliar, atendimentos, depoimentos }) => {
    const paciente = await prisma.Paciente.findUnique({
        wher: { id }
    });
    if (!paciente) {
        throw new Error('Paciente não encontrado...');
    };
    return await prisma.Paciente.update({
        where: { id },
        data: { nomeCompleto, genero, idade, principaisQueixas, usoDeMedicamentos, objetivoDaTerapia, historicoFamiliar, atendimentos, depoimentos }
    });
};

const excluirPaciente = async (id) => {
    const paciente = await prisma.Paciente.findUnique({
        wher: { id }
    });
    if (!treino) {
        throw new Error('Paciente não encontrado...');
    };

    await prisma.Paciente.delete({
        where: { id }
    });
};

module.exports = {listarPacientes, buscarPacientePorId, criarPacientes, atualizarPacietes, excluirPaciente};