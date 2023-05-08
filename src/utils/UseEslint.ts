// init Eslint if the user chose it
import {spawn} from "child_process";
import chalk from "chalk";

export const initEslint = (npmPath: string) => {
    // init eslint with default values
    const eslintInit = spawn(npmPath, ['init', '@eslint/config'], {stdio: 'inherit'});
    eslintInit.on('error', () => {
        console.log(chalk.red('Error while initializing Eslint !'));
    });
}