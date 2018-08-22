import * as path from "path";
import { serveClothing } from "clothingweb";

export function getRouter() {
  return serveClothing(
    path.join(__dirname, "../../node_modules/clothingweb/gui"),
    path.join(__dirname, "../../node_modules/clothingweb/data.zip")
  );
}
