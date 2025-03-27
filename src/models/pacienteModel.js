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

export const criarPacientes = async (nomeCompleto, genero, idade, principaisQueixas, usoDeMedicamentos, objetivoDaTerapia, historicoFamiliar, atendimentos, depoimentos) => {
    return await prisma.paciente.create({
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

export const atualizarPacietes = async (id, { nomeCompleto, genero, idade, principaisQueixas, usoDeMedicamentos, objetivoDaTerapia, historicoFamiliar, atendimentos, depoimentos }) => {
    const paciente = await prisma.paciente.findUnique({
        where: { id }
    });
    if (!paciente) {
        throw new Error('Paciente não atualizado...');
    };
    return await prisma.paciente.update({
        where: { id },
        data: { nomeCompleto, genero, idade, principaisQueixas, usoDeMedicamentos, objetivoDaTerapia, historicoFamiliar, atendimentos, depoimentos }
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