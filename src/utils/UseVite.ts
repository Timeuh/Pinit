import chalk from "chalk";
import {spawn} from "child_process";
import {npmPath} from "../stores/appConsts";

// init Vite js if the user chose it
export const initVite = () => {
    // init vite
    const viteInit = spawn(npmPath, ['init', 'vite'], {stdio: 'inherit'});
    viteInit.on('error', () => {
        console.log(chalk.red('Error while initializing Vite !'));
    });
}