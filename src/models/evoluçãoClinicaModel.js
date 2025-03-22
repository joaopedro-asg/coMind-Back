import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const EvolucaoClinica = {
    create: async (data) => {
        return await prisma.EvolucaoClinica.create({data});
    },

    findAll: async () => {
        return await prisma.EvolucaoClinica.findMany();
    },

    findById: async (id) => {
        return await prisma.EvolucaoClinica.findUnique({ where: {id}});
    },

    update: async (id, data) => {
        return await prisma.EvolucaoClinica.update({ where: {id}, data,});
    },

    delete: async (id) => {
        return await prisma.EvolucaoClinica.delete({ where: {id}});
    },
};