const prisma = require('../prisma');

exports.listarUsuario = async () => {
    return await prisma.usuario.findMany();
}

exports.buscarUsuarioPorId = async (id) => {
    const usuario = await prisma.usuario.findUnique({
        where: {id}
    });

    if (!usuario) {
        throw new Error('Usuario não encontrado');
    }
    return usuario;
};

exports.buscarUsuarioPorEmail = async (email) => {
    const usuario = await prisma.usuario.findUnique({
        where: {email}
    });
    return usuario;
};

exports.criarUsuario = async ({nomeusario, email, senha, tipo}) => {
    return await prisma.usuario.create({
        data: {
            nomeusario,
            email,
            senha,
            tipo,
        },
    });
};

exports.atualizarUsuario = async (id, {nomeusario, email, senha, tipo}) => {
    const usuario = await prisma.usuario.findUnique({
        where: {id},
    });

    if (!usuario) {
        throw new Error('Usuario não encontrado');
    }

    return await prisma.usuario.update({
        where: {id},
        data: {
            nomeusario,
            email,
            senha,
            tipo
        },
    });
};

exports.excluirUsuario = async (id) => {
    const usuario = await prisma.usuario.findUnique({
        where: {id},
    });

    if (!usuario) {
        throw new Error('Usuario não encontrado');
    }

    await prisma.usuario.delete({
        where: {id},
    });
};