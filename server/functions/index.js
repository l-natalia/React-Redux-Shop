const functions = require("firebase-functions");
const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors({ origin: true }));

app.use("/api", require("./api"));

exports.app = functions.https.onRequest(app);
