import prisma from '../prisma.js'

export const listarProfissional = async () => {
    return await prisma.profissional.findMany();
};

export const buscarProfissionalPorId = async (id) => {
    const profissional = await prisma.profissional.findUnique({
        where: { id }
    });
    if (!profissional) {
        throw new Error('Profissional não encontrado...');
    };
    return profissional;
};

export const criarProfissional = async (usuarioID, nomeCompleto, matricula, genero, bio, formacoes, especialidade, faixaEtaria, preco, regiao, foto, diasAtendimento, quantAtendimentosGratuitos, atendimentos, evolucoesClinicas, gruposApoio) => {
    return await prisma.profissional.create({
        data:
        {
            usuarioID,
            nomeCompleto, 
            matricula, 
            genero, 
            bio, 
            formacoes, 
            especialidade, 
            faixaEtaria, 
            preco, 
            regiao, 
            foto, 
            diasAtendimento, 
            quantAtendimentosGratuitos,
            atendimentos,
            evolucoesClinicas,
            gruposApoio
        }
    });
};

export const atualizarProfissional = async (id, { usuarioID, nomeCompleto, matricula, genero, bio, formacoes, especialidade, faixaEtaria, preco, regiao, foto, diasAtendimento, quantAtendimentosGratuitos, atendimentos, evolucoesClinicas, gruposApoio }) => {
    const profissional = await prisma.profissional.findUnique({
        where: { id }
    });
    if (!profissional) {
        throw new Error('Profissional não atualizado...');
    };
    return await prisma.profissional.update({
        where: { id },
        data: { usuarioID, nomeCompleto, matricula, genero, bio, formacoes, especialidade, faixaEtaria, preco, regiao, foto, diasAtendimento, quantAtendimentosGratuitos, atendimentos, evolucoesClinicas, gruposApoio }
    });
};

export const excluirProfissional = async (id) => {
    const profissional = await prisma.profissional.findUnique({
        where: { id }
    });
    if (!profissional) {
        throw new Error('Profissional não excluído...');
    };

    await prisma.profissional.delete({
        where: { id }
    });
};