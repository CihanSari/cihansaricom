import * as path from "path";
import { middlewareServeLavaland } from "@lavaland/server";
export function getRouter() {
  return middlewareServeLavaland(
    path.join(__dirname, "../../node_modules/@lavaland/gui/dist")
  );
}
