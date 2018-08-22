"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const clothingweb_1 = require("clothingweb");
function getRouter() {
    return clothingweb_1.serveClothing(path.join(__dirname, "../../node_modules/clothingweb/gui"), path.join(__dirname, "../../node_modules/clothingweb/data.zip"));
}
exports.getRouter = getRouter;
