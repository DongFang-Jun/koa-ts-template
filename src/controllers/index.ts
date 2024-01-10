import fs from "fs";
import path from "path";
import { ENV } from "../config/constant";

const controllers = {} as { [key: string]: any };

const fileType = process.env.NODE_ENV === ENV.production ? "js" : "ts";

function readFileList(dir: any) {
  const files = fs.readdirSync(dir);
  files.forEach((item) => {
    if (item === `index.${fileType}`) return;

    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      readFileList(path.join(dir, item));
    } else {
      const platform = process.platform;
      if (platform.toLowerCase() === "win32") {
        // windows
        const temp = fullPath.split(__dirname + "\\")[1];
        const obj_temp = temp.replaceAll("\\", "_").split(`.${fileType}`)[0];
        controllers[obj_temp] = require(`./${temp}`);
      } else {
        // 除windows外
        const temp = fullPath.split(__dirname + "/")[1];
        const obj_temp = temp.replaceAll("/", "_").split(`.${fileType}`)[0];
        controllers[obj_temp] = require(`./${temp}`);
      }
    }
  });
}

readFileList(__dirname);

export default controllers;
