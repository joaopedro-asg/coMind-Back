/*
  Warnings:

  - The values [domingo,segunda_feira,terca_feira,quarta_feira,quinta_feira,sexta_feira,sabado] on the enum `DiasAtendimento` will be removed. If these variants are still used in the database, this will fail.
  - The values [ansiedade,depressao,fobias,autoconhecimento,autoestima,borderline,bulimia,cancer,transtornos,compulsoes,dislexia,disturbios,drogas,esquizofrenia,estressa,hiperatividade,hipocondria,obesidade,burnout,sexualidade,suicídio] on the enum `Especialidades` will be removed. If these variants are still used in the database, this will fail.
  - The values [criancas,adolescentes,adultos,idosos,casais] on the enum `FaixaEtaria` will be removed. If these variants are still used in the database, this will fail.
  - The values [admin,paciente,profissional] on the enum `UsuarioTipo` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "DiasAtendimento_new" AS ENUM ('DOMINGO', 'SEGUNDA', 'TERCA', 'QUARTA', 'QUINTA', 'SEXTA', 'SABADO');
ALTER TABLE "Profissional" ALTER COLUMN "diasAtendimento" TYPE "DiasAtendimento_new"[] USING ("diasAtendimento"::text::"DiasAtendimento_new"[]);
ALTER TYPE "DiasAtendimento" RENAME TO "DiasAtendimento_old";
ALTER TYPE "DiasAtendimento_new" RENAME TO "DiasAtendimento";
DROP TYPE "DiasAtendimento_old";
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "Especialidades_new" AS ENUM ('ANSIEDADE', 'DEPRESSAO', 'FOBIAS', 'AUTOCONHECIMENTO', 'AUTOESTIMA', 'BORDERLINE', 'BULIMIA', 'CANCER', 'TRANSTORNOS', 'COMPULSOES', 'DISLEXIA', 'DISTURBIOS', 'DROGAS', 'ESQUIZOFRENIA', 'ESTRESSA', 'HIPERATIVIDADE', 'HIPOCONDRIA', 'OBESIDADE', 'BURNOUT', 'SEXUALIDADE', 'SUICIDIO');
ALTER TABLE "Profissional" ALTER COLUMN "especialidade" TYPE "Especialidades_new"[] USING ("especialidade"::text::"Especialidades_new"[]);
ALTER TYPE "Especialidades" RENAME TO "Especialidades_old";
ALTER TYPE "Especialidades_new" RENAME TO "Especialidades";
DROP TYPE "Especialidades_old";
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "FaixaEtaria_new" AS ENUM ('CRIANCAS', 'ADOLESCENTES', 'ADULTOS', 'IDOSOS', 'CASAIS');
ALTER TABLE "Profissional" ALTER COLUMN "faixaEtaria" TYPE "FaixaEtaria_new" USING ("faixaEtaria"::text::"FaixaEtaria_new");
ALTER TYPE "FaixaEtaria" RENAME TO "FaixaEtaria_old";
ALTER TYPE "FaixaEtaria_new" RENAME TO "FaixaEtaria";
DROP TYPE "FaixaEtaria_old";
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "UsuarioTipo_new" AS ENUM ('ADMIN', 'PACIENTE', 'PROFISSIONAL');
ALTER TABLE "Usuario" ALTER COLUMN "tipo" DROP DEFAULT;
ALTER TABLE "Usuario" ALTER COLUMN "tipo" TYPE "UsuarioTipo_new" USING ("tipo"::text::"UsuarioTipo_new");
ALTER TYPE "UsuarioTipo" RENAME TO "UsuarioTipo_old";
ALTER TYPE "UsuarioTipo_new" RENAME TO "UsuarioTipo";
DROP TYPE "UsuarioTipo_old";
ALTER TABLE "Usuario" ALTER COLUMN "tipo" SET DEFAULT 'PACIENTE';
COMMIT;

-- AlterTable
ALTER TABLE "Usuario" ALTER COLUMN "tipo" SET DEFAULT 'PACIENTE';
