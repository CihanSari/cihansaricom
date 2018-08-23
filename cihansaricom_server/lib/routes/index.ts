import * as express from "express";
import * as path from "path";
export function getRouter() {
  const router = express.Router();
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
  return router;
}
