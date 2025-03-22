const express = require("express");
const app = express();
const pacienteRoutes = require("./routes/pacienteRoutes");
const evolucaoClinica = require("./routes/evolucaoClinicaRoutes");

app.use(express.json());
app.use("/paciente", pacienteRoutes);
app.use("/evolucaoClinica", evolucaoClinicaRoutes);

module.exports = app;