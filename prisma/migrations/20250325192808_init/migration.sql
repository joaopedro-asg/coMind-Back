/*
  Warnings:

  - Added the required column `quantAtendimentosGratuitos` to the `Profissional` table without a default value. This is not possible if the table is not empty.
  - Changed the column `faixaEtaria` on the `Profissional` table from a scalar field to a list field. If there are non-null values in that column, this step will fail.

*/
-- AlterTable
ALTER TABLE "Profissional" ADD COLUMN     "quantAtendimentosGratuitos" INTEGER NOT NULL,
ALTER COLUMN "faixaEtaria" SET DATA TYPE "FaixaEtaria"[];
