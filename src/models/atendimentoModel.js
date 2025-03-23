import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const Atendimento = {
    create: async (data) => {
        return await prisma.Atendimento.create({data});
    },

    findAll: async () => {
        return await prisma.Atendimento.findMany();
    },

    findById: async (id) => {
        return await prisma.Atendimento.findUnique({ where: {id}});
    },

    update: async (id, data) => {
        return await prisma.Atendimento.update({ where: {id}, data,});
    },

    delete: async (id) => {
        return await prisma.Atendimento.delete({ where: {id}});
    },
};