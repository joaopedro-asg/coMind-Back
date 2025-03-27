import cors from 'cors';
import express from 'express';
import authRoutes from './routes/authRoutes.js';
import userRoutes from './routes/userRoutes.js';
import pacienteRoutes from './routes/pacienteRoutes.js';
import depoimentosRoutes from './routes/depoimentosRoutes.js';
import profissionalRoutes from './routes/profissionalRoutes.js';
import gruposApoioRoutes from './routes/gruposApoioRoutes.js';
import atendimentoRoutes from './routes/atendimentoRoutes.js'
import evolucaoClinica from './routes/evolucaoClinicaRoutes.js';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/auth', authRoutes);
app.use('/users', userRoutes);
app.use("/paciente", pacienteRoutes);
app.use("/depoimentos", depoimentosRoutes);
app.use("/profissional", profissionalRoutes);
app.use("/grupos-apoio", gruposApoioRoutes);
app.use("/atendimentos", atendimentoRoutes);
app.use("/evolucao-clinica", evolucaoClinica);


export default app;