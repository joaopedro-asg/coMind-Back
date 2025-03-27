-- CreateEnum
CREATE TYPE "UsuarioTipo" AS ENUM ('ADMIN', 'PACIENTE', 'PROFISSIONAL');

-- CreateEnum
CREATE TYPE "Especialidades" AS ENUM ('ANSIEDADE', 'DEPRESSAO', 'FOBIAS', 'AUTOCONHECIMENTO', 'AUTOESTIMA', 'BORDERLINE', 'BULIMIA', 'CANCER', 'TRANSTORNOS', 'COMPULSOES', 'DISLEXIA', 'DISTURBIOS', 'DROGAS', 'ESQUIZOFRENIA', 'ESTRESSA', 'HIPERATIVIDADE', 'HIPOCONDRIA', 'OBESIDADE', 'BURNOUT', 'SEXUALIDADE', 'SUICIDIO');

-- CreateEnum
CREATE TYPE "FaixaEtaria" AS ENUM ('CRIANCAS', 'ADOLESCENTES', 'ADULTOS', 'IDOSOS', 'CASAIS');

-- CreateEnum
CREATE TYPE "DiasAtendimento" AS ENUM ('DOMINGO', 'SEGUNDA', 'TERCA', 'QUARTA', 'QUINTA', 'SEXTA', 'SABADO');

-- CreateTable
CREATE TABLE "Depoimentos" (
    "id" SERIAL NOT NULL,
    "pacienteID" INTEGER NOT NULL,
    "nome" TEXT NOT NULL,
    "local" TEXT NOT NULL,
    "texto" TEXT NOT NULL,
    "dataEnvio" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Depoimentos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Atendimento" (
    "id" SERIAL NOT NULL,
    "profissionalID" INTEGER NOT NULL,
    "pacienteID" INTEGER NOT NULL,
    "data" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "horario" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" TEXT NOT NULL,

    CONSTRAINT "Atendimento_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GruposApoio" (
    "id" SERIAL NOT NULL,
    "profissionalID" INTEGER NOT NULL,
    "tipo" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "local" TEXT NOT NULL,

    CONSTRAINT "GruposApoio_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Usuario" (
    "id" SERIAL NOT NULL,
    "nomeUsario" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "tipo" "UsuarioTipo" NOT NULL DEFAULT 'PACIENTE',

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Profissional" (
    "id" SERIAL NOT NULL,
    "usuarioID" INTEGER NOT NULL,
    "nomeCompleto" TEXT NOT NULL,
    "matricula" TEXT NOT NULL,
    "genero" TEXT NOT NULL,
    "bio" TEXT NOT NULL,
    "formacoes" TEXT NOT NULL,
    "especialidade" "Especialidades"[],
    "faixaEtaria" "FaixaEtaria"[],
    "preco" INTEGER NOT NULL,
    "regiao" TEXT NOT NULL,
    "foto" TEXT NOT NULL,
    "diasAtendimento" "DiasAtendimento"[],
    "quantAtendimentosGratuitos" INTEGER NOT NULL,

    CONSTRAINT "Profissional_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Paciente" (
    "id" SERIAL NOT NULL,
    "usuarioID" INTEGER NOT NULL,
    "nomeCompleto" TEXT NOT NULL,
    "genero" TEXT NOT NULL,
    "idade" INTEGER NOT NULL,
    "principaisQueixas" TEXT NOT NULL,
    "usoDeMedicamentos" TEXT NOT NULL,
    "objetivoDaTerapia" TEXT NOT NULL,
    "historicoFamiliar" TEXT NOT NULL,

    CONSTRAINT "Paciente_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EvolucaoClinica" (
    "id" SERIAL NOT NULL,
    "pacienteID" INTEGER NOT NULL,
    "profissionalID" INTEGER NOT NULL,
    "relatoAtendimento" TEXT NOT NULL,
    "ajustesNoTratamento" TEXT NOT NULL,
    "data" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "EvolucaoClinica_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Depoimentos_pacienteID_key" ON "Depoimentos"("pacienteID");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Profissional_usuarioID_key" ON "Profissional"("usuarioID");

-- CreateIndex
CREATE UNIQUE INDEX "Profissional_matricula_key" ON "Profissional"("matricula");

-- CreateIndex
CREATE UNIQUE INDEX "Paciente_usuarioID_key" ON "Paciente"("usuarioID");

-- CreateIndex
CREATE UNIQUE INDEX "EvolucaoClinica_pacienteID_key" ON "EvolucaoClinica"("pacienteID");

-- CreateIndex
CREATE UNIQUE INDEX "EvolucaoClinica_profissionalID_key" ON "EvolucaoClinica"("profissionalID");

-- AddForeignKey
ALTER TABLE "Depoimentos" ADD CONSTRAINT "Depoimentos_pacienteID_fkey" FOREIGN KEY ("pacienteID") REFERENCES "Paciente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Atendimento" ADD CONSTRAINT "Atendimento_pacienteID_fkey" FOREIGN KEY ("pacienteID") REFERENCES "Paciente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Atendimento" ADD CONSTRAINT "Atendimento_profissionalID_fkey" FOREIGN KEY ("profissionalID") REFERENCES "Profissional"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GruposApoio" ADD CONSTRAINT "GruposApoio_profissionalID_fkey" FOREIGN KEY ("profissionalID") REFERENCES "Profissional"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Profissional" ADD CONSTRAINT "Profissional_usuarioID_fkey" FOREIGN KEY ("usuarioID") REFERENCES "Usuario"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Paciente" ADD CONSTRAINT "Paciente_usuarioID_fkey" FOREIGN KEY ("usuarioID") REFERENCES "Usuario"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EvolucaoClinica" ADD CONSTRAINT "EvolucaoClinica_pacienteID_fkey" FOREIGN KEY ("pacienteID") REFERENCES "Paciente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EvolucaoClinica" ADD CONSTRAINT "EvolucaoClinica_profissionalID_fkey" FOREIGN KEY ("profissionalID") REFERENCES "Profissional"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
