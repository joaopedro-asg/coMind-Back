import cors from 'cors';
import express from 'express';
import authRoutes from './routes/authRoutes.js';
import userRoutes from './routes/userRoutes.js';

const express = require("express");
const app = express();

const pacienteRoutes = require("./routes/pacienteRoutes");
const depoimentosRoutes = require("./routes/depoimentosRoutes");
const gruposApoioRoutes = require("./routes/gruposApoioRoutes");
const atendimentoRoutes = require("./routes/atendimentoRoutes.js");
const evolucaoClinica = require("./routes/evolucaoClinicaRoutes.js");

app.use(cors());
app.use(express.json());
app.use('/auth', authRoutes);
app.use('/users', userRoutes);
app.use("/paciente", pacienteRoutes);
app.use("/depoimentos", depoimentosRoutes);
app.use("/grupos-apoio", gruposApoioRoutes);
app.use("/atendimentos", atendimentoRoutes);
app.use("/evolucao-clinica", evolucaoClinica);


export default app;