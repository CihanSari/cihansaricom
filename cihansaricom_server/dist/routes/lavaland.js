"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const path = require("path");
const lavalandServer = require("@lavaland/server");
const router = express.Router();
exports.router = router;
console.log(lavalandServer);
router.use(lavalandServer.middlewareServeLavaland(path.join(__dirname, "../../node_modules/@lavaland/gui/dist")));
