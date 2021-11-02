require("dotenv").config();
const express = require("express");
const app = express();


const playersRouter = require("./players/players.router");

const notFound = require("./errors/notFound");
const errorHandler = require("./errors/errorHandler");

app.use(express.json());


app.use("/players", playersRouter);

app.use(notFound);
app.use(errorHandler);

module.exports = app;