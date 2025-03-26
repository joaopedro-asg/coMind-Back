import cors from 'cors';
import express from 'express';
import authRoutes from './routes/authRoutes.js';
import userRoutes from './routes/userRoutes.js';
// import pacienteRoutes from './routes/pacienteRoutes';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/auth', authRoutes);
app.use('/users', userRoutes);
// app.use('/api/pacientes', pacienteRoutes);

export default app;