import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const EvolucaoClinica = {
    create: async (data) => {
        return await prisma.evolucaoClinica.create({data});
    },

    findAll: async () => {
        return await prisma.evolucaoClinica.findMany();
    },

    findById: async (id) => {
        return await prisma.evolucaoClinica.findUnique({ where: {id}});
    },

    update: async (id, data) => {
        return await prisma.evolucaoClinica.update({ where: {id}, data,});
    },

    delete: async (id) => {
        return await prisma.evolucaoClinica.delete({ where: {id}});
    },
};