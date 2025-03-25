const express = require("express");
const app = express();
const pacienteRoutes = require("./routes/pacienteRoutes");
const evolucaoClinica = require("./routes/evolucaoClinicaRoutes");
const atendimentoRoutes = require("./routes/atendimentoRoutes");


app.use(express.json());
app.use("/paciente", pacienteRoutes);
app.use("/evolucaoClinica", evolucaoClinicaRoutes);
app.use("/atendimento", atendimentoRoutes);


module.exports = app;