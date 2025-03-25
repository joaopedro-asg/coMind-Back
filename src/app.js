const express = require("express");
const app = express();
const pacienteRoutes = require("./routes/pacienteRoutes");
const atendimentoRoutes = require("./routes/atendimentoRoutes");
const evolucaoClinicaRoutes = require("./routes/evolucaoClinicaRoutes");

app.use(express.json());
app.use("/paciente", pacienteRoutes);
app.use("/evolucaoClinica", evolucaoClinicaRoutes);
app.use("/atendimento", atendimentoRoutes);


module.exports = app;