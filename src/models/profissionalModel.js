const prisma = require("../prisma");

const listarProfissional = async () => {
    return await prisma.Profissional.findMany();
};

const buscarProfissionalPorId = async (id) => {
    const profissional = await prisma.Profissional.findUnique({
        where: { id }
    });
    if (!profissional) {
        throw new Error('Profissional não encontrado...');
    };
    return profissional;
};

const criarProfissional = async (nomeCompleto, matricula, genero, bio, formacoes, especialidade, faixaEtaria, preco, regiao, foto, diasAtendimento, quantAtendimentosGratuitos) => {
    return await prisma.EvolucaoClinica.create({
        data:
        {
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
            quantAtendimentosGratuitos 
        }
    });
};

const atualizarProfissional = async (id, { nomeCompleto, matricula, genero, bio, formacoes, especialidade, faixaEtaria, preco, regiao, foto, diasAtendimento, quantAtendimentosGratuitos }) => {
    const profissional = await prisma.Profissional.findUnique({
        where: { id }
    });
    if (!profissional) {
        throw new Error('Profissional não atualizado...');
    };
    return await prisma.Profissional.update({
        where: { id },
        data: { nomeCompleto, matricula, genero, bio, formacoes, especialidade, faixaEtaria, preco, regiao, foto, diasAtendimento, quantAtendimentosGratuitos }
    });
};

const excluirProfissional = async (id) => {
    const profissional = await prisma.Profissional.findUnique({
        where: { id }
    });
    if (!profissional) {
        throw new Error('Profissional não excluído...');
    };

    await prisma.Profissional.delete({
        where: { id }
    });
};

module.exports = {listarProfissional, buscarProfissionalPorId, criarProfissional, atualizarProfissional, excluirProfissional };