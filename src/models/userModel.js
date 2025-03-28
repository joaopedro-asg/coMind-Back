import prisma from "../prisma.js";
import * as paciente from "./pacienteModel.js";

// MARK: - Consultas
export const listarUsuario = async () => {
    return await prisma.usuario.findMany({
        include: {
            paciente: true,
            profissional: true
        }
    });
}

export const buscarUsuarioPorId = async (id) => {
    const usuario = await prisma.usuario.findUnique({
        where: { id },
        include: {
            paciente: true,
            profissional: true
        }
    });

    if (!usuario) {
        throw new Error('Usuário não encontrado');
    }
    return usuario;
};

export const buscarUsuarioPorEmail = async (email) => {
    const usuario = await prisma.usuario.findUnique({
        where: { email },
        include: {
            paciente: true,
            profissional: true
        }
    });
    return usuario;
};

// CREATE com criação do perfil
export const criarUsuario = async (data) => {
    return await prisma.$transaction(async (prisma) => {
        if (!data.nomeUsario || !data.email || !data.senha || !data.tipo) {
            throw new Error('Campos obrigatórios faltando: nomeUsario, email, senha e tipo');
        }

        const usuarioExistente = await prisma.usuario.findUnique({
            where: { email: data.email }
        });
        
        if (usuarioExistente) {
            throw new Error('Email já cadastrado');
        }

        const novoUsuario = await prisma.usuario.create({
            data: {
                nomeUsario: data.nomeUsario,
                email: data.email,
                senha: data.senha,
                tipo: data.tipo
            }
        });

        try {
            if (novoUsuario.tipo === "PACIENTE") {
                if (!data.nomeCompleto) {
                    throw new Error('Nome completo é obrigatório para pacientes');
                }

                await prisma.paciente.create({
                    data: {
                        usuarioID: novoUsuario.id,
                        nomeCompleto: data.nomeCompleto,
                        genero: data.genero || 'NAO_INFORMADO',
                        idade: data.idade || 0,
                        principaisQueixas: data.principaisQueixas || '',
                        usoDeMedicamentos: data.usoDeMedicamentos || 'NAO',
                        objetivoDaTerapia: data.objetivoDaTerapia || '',
                        historicoFamiliar: data.historicoFamiliar || '',
                        atendimentos: { create: [] },
                        evolucoesClinicas: { create: [] }
                    }
                });
            } 
            else if (novoUsuario.tipo === 'PROFISSIONAL') {
                if (!data.matricula) {
                    throw new Error('Matrícula é obrigatória para profissionais');
                }
                
                await prisma.profissional.create({
                    data: {
                        usuarioID: novoUsuario.id,
                        nomeCompleto: data.nomeCompleto || data.nomeUsario,
                        matricula: data.matricula,
                        especialidade: data.especialidade ? [data.especialidade] : [],
                        genero: data.genero || 'NAO_INFORMADO',
                        bio: data.bio || '',
                        formacoes: data.formacoes || '',
                        preco: data.preco || 0,
                        regiao: data.regiao || '',
                        foto: data.foto || '',
                        diasAtendimento: data.diasAtendimento || [],
                        quantAtendimentosGratuitos: data.quantAtendimentosGratuitos || 0
                    }
                });
            }
        } catch (error) {
            console.error('Erro ao criar perfil específico:', error);
            throw new Error(`Falha ao criar perfil de ${novoUsuario.tipo}: ${error.message}`);
        }

        return await prisma.usuario.findUnique({
            where: { id: novoUsuario.id },
            include: {
                paciente: novoUsuario.tipo === "PACIENTE",
                profissional: novoUsuario.tipo === "PROFISSIONAL"
            }
        });
    });
};


// UPDATE
export const atualizarUsuario = async (id, { nomeusario, email, senha, tipo }) => {
    const usuario = await prisma.usuario.findUnique({
        where: { id },
    });

    if (!usuario) {
        throw new Error('Usuário não encontrado');
    }

    return await prisma.usuario.update({
        where: { id },
        data: {
            nomeusario,
            email,
            senha,
            tipo
        },
    });
};

// DELETE
export const excluirUsuario = async (id) => {
    const usuario = await prisma.usuario.findUnique({
        where: { id },
    });

    if (!usuario) {
        throw new Error('Usuário não encontrado');
    }

    await prisma.usuario.delete({
        where: { id },
    });
};