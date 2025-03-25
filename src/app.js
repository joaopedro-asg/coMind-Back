const express = require("express");
const app = express();
const pacienteRoutes = require("./routes/pacienteRoutes");
const depoimentosRoutes = require("./routes/depoimentosRoutes")

app.use(express.json());
app.use("/paciente", pacienteRoutes);
app.use("/depoimentos", depoimentosRoutes);


module.exports = app;