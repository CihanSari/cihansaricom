"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const path = require("path");
function getRouter() {
    const router = express.Router();
    if (false) {
        /* GET home page. */
        const pathToServe = path.join(__dirname, "../../../cihansaricom_gui/dist");
        router.use(express.static(pathToServe));
        router.use((req, res, next) => {
            // respond with html page
            if (req.accepts("html") && req.url.indexOf(".") !== -1) {
                res.sendFile(path.join(pathToServe, "index.html"));
                return;
            }
            next();
        });
    }
    else {
        // Highjack to redirect until our greeting page is up
        router.use((req, res, next) => res.redirect(301, "https://clothingweb.cihansari.com/"));
    }
    return router;
}
exports.getRouter = getRouter;
