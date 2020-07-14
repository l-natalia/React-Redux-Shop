const express = require("express");

const api = express.Router();

api.use("/products", require("./products"));

module.exports = api;
