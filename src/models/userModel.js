//MARK: - Consulta com prisma
export const listarUsuario = async () => {
    return await prisma.usuario.findMany();
}

export const buscarUsuarioPorId = async (id) => {
    const usuario = await prisma.usuario.findUnique({
        where: {id}
    });

    if (!usuario) {
        throw new Error('Usuario não encontrado');
    }
    return usuario;
};

export const buscarUsuarioPorEmail = async (email) => {
    const usuario = await prisma.usuario.findUnique({
        where: {email}
    });
    return usuario;
};

export const criarUsuario = async ({nomeusario, email, senha, tipo}) => {
    return await prisma.usuario.create({
        data: {
            nomeusario,
            email,
            senha,
            tipo,
        },
    });
};

export const atualizarUsuario = async (id, {nomeusario, email, senha, tipo}) => {
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

export const excluirUsuario = async (id) => {
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