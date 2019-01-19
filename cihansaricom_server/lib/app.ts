import * as bodyParser from "body-parser";
import * as express from "express";
import * as cookieParser from "cookie-parser";
import * as logger from "morgan";

import {getRouter as indexRouter} from "./routes/index";
import {getRouter as apiRouter} from "./routes/api";

const app = express();

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use("/", indexRouter());
app.use("/api", apiRouter());

export {app};
