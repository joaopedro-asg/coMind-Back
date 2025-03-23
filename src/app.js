import express, { json } from 'express';
import cors from 'cors';
import authRoutes from './routes/authRoutes';
import userRoutes from './routes/userRoutes';
// import pacienteRoutes from './routes/pacienteRoutes';

const app = express();

app.use(json());
app.use(cors());

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
// app.use('/api/pacientes', pacienteRoutes);

export default app;