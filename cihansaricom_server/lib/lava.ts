const PORT = Number(process.env.PORT) || 80;
import * as bodyParser from "body-parser";
import * as express from "express";
import * as expressWs from "express-ws";
import * as cookieParser from "cookie-parser";
import * as logger from "morgan";

import {getRouter as lavalandRouter} from "./routes/lavalandroute";

const app = express();
expressWs(app);

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use("/", lavalandRouter());

app.listen(PORT);
