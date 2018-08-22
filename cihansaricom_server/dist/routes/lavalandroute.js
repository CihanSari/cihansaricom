"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const server_1 = require("@lavaland/server");
function getRouter() {
    return server_1.middlewareServeLavaland(path.join(__dirname, "../../node_modules/@lavaland/gui/dist"));
}
exports.getRouter = getRouter;
