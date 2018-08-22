import * as bodyParser from "body-parser";
import * as express from "express";
import * as expressWs from "express-ws";
import * as cookieParser from "cookie-parser";
import * as logger from "morgan";
const subdomain = require("express-subdomain");

import { getRouter as indexRouter } from "./routes/index";
import { getRouter as apiRouter } from "./routes/api";
import { getRouter as lavalandRouter } from "./routes/lavalandroute";
import { getRouter as clothingRouter } from "./routes/clothing";

const app = express();
expressWs(app);

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(subdomain("lavaland", lavalandRouter()));
app.use(subdomain("clothingweb", clothingRouter()));
app.use("/", indexRouter());
app.use("/api", apiRouter());

export { app };
