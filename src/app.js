const express = require("express");
const app = express();
const pacienteRoutes = require("./routes/pacienteRoutes");
const evolucaoClinicaRoutes = require("./routes/evolucaoClinicaRoutes");
const profissionalRoutes = require("./routes/profissionalRouter");

app.use(express.json());
app.use("/paciente", pacienteRoutes);
app.use("/evolucaoClinica", evolucaoClinicaRoutes);
app.use("/profissional", profissionalRoutes);
const depoimentosRoutes = require("./routes/depoimentosRoutes")
app.use(express.json());
app.use("/paciente", pacienteRoutes);
app.use("/depoimentos", depoimentosRoutes);


module.exports = app;