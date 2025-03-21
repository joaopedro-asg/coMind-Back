const express = require("express");
const app = express();
const pacienteRoutes = require("./routes/pacienteRoutes");
const userRoutes = require("./routes/userRoutes")

app.use(express.json());
app.use("/paciente", pacienteRoutes);
app.use("/users", userRoutes)

module.exports = app;