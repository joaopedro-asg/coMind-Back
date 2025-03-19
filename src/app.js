const express = require("express");
const app = express();
const pacienteRoutes = require("./routes/pacienteRoutes");
app.use(express.json());
app.use("/paciente", pacienteRoutes);

module.exports = app;