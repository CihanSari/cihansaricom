"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bodyParser = require("body-parser");
const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const index_1 = require("./routes/index");
const api_1 = require("./routes/api");
const app = express();
exports.app = app;
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use("/", index_1.getRouter());
app.use("/api", api_1.getRouter());
