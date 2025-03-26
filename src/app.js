const express = require("express");
const app = express();
const pacienteRoutes = require("./routes/pacienteRoutes");
const evolucaoClinicaRoutes = require("./routes/evolucaoClinicaRoutes");
const profissionalRouter = require("./routes/profissionalRouter");

app.use(express.json());
app.use("/paciente", pacienteRoutes);
app.use("/evolucaoClinica", evolucaoClinicaRoutes);
app.use("/profissionais", profissionalRouter);

module.exports = app;