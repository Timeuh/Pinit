import path from "path";
import {fileURLToPath} from "url";

// get the templates directory
const currentFileUrl = import.meta.url;
export const templateDirectory = path.resolve(decodeURI(fileURLToPath(currentFileUrl)), '../../src/templates');