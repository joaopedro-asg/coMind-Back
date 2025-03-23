const express = require("express");
const app = express();
const pacienteRoutes = require("./routes/pacienteRoutes");
const evolucaoClinicaRoutes = require("./routes/evolucaoClinicaRoutes");

app.use(express.json());
app.use("/paciente", pacienteRoutes);
app.use("/evolucaoClinica", evolucaoClinicaRoutes);

module.exports = app;