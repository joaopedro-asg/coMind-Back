import prisma from '../prisma.js'

export const listarPacientes = async () => {
    return await prisma.paciente.findMany();
};

export const buscarPacientesPorId = async (id) => {
    const paciente = await prisma.paciente.findUnique({
        where: { id }
    });
    if (!paciente) {
        throw new Error('Paciente não encontrado...');
    };
    return paciente;
};

export const criarPacientes = async (usuarioID, nomeCompleto, genero, idade, principaisQueixas, usoDeMedicamentos, objetivoDaTerapia, historicoFamiliar, atendimentos, evolucoesClinicas, depoimentos) => {
    return await prisma.paciente.create({
        data:
        {
            usuarioID,
            nomeCompleto, 
            genero, 
            idade, 
            principaisQueixas, 
            usoDeMedicamentos, 
            objetivoDaTerapia, 
            historicoFamiliar,
            atendimentos,
            evolucoesClinicas,
            depoimentos 
        }
    });
};

export const atualizarPacientes = async (id, { usuarioID, nomeCompleto, genero, idade, principaisQueixas, usoDeMedicamentos, objetivoDaTerapia, historicoFamiliar, atendimentos, evolucoesClinicas, depoimentos }) => {
    const paciente = await prisma.paciente.findUnique({
        where: { id }
    });
    if (!paciente) {
        throw new Error('Paciente não atualizado...');
    };
    return await prisma.paciente.update({
        where: { id },
        data: { usuarioID, nomeCompleto, genero, idade, principaisQueixas, usoDeMedicamentos, objetivoDaTerapia, historicoFamiliar, atendimentos, evolucoesClinicas, depoimentos }
    });
};

export const excluirPacientes = async (id) => {
    const paciente = await prisma.paciente.findUnique({
        where: { id }
    });
    if (!paciente) {
        throw new Error('Paciente não excluído...');
    };

    await prisma.paciente.delete({
        where: { id }
    });
};