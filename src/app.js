const express = require('express');
const userRoutes = require('./routes/userRoutes');
//const pacienteRoutes = require('./routes/pacienteRoutes');

const app = express();

app.use(express.json());
app.use('/usuarios', userRoutes);
//app.use('/pacientes', pacienteRoutes);

module.exports = app;
