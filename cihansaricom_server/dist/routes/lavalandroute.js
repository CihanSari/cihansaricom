"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const main_1 = require("@lavaland/main");
function getRouter() {
    return main_1.middlewareServeLavaland(path.join(__dirname, "../../../node_modules/@lavaland/main/lavalandangular/dist"));
}
exports.getRouter = getRouter;
