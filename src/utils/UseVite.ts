import {QuestionChoice} from "../types/types";
import chalk from "chalk";
import {spawn} from "child_process";
import {join} from "path";

// create a question to ask the user if he wants to use vite js
export const useVite: QuestionChoice = [
    {
        name: 'useVite',
        type: 'confirm',
        message: chalk.cyan('Would you like to use Vite Js ? (Y/n)'),
    }
];

// init Vite js if the user chose it
export const initVite = () => {
    // get npm path
    const appData = process.env.APPDATA || '';
    const npmPath = join(appData, 'npm', 'npm.cmd');

    // install vite
    const viteInstall = spawn(npmPath, ['install', 'vite', '--save-dev'], {stdio: 'ignore'});
    viteInstall.on('error', () => {
        console.log(chalk.red('Error while installing Vite !'));
    });

    // when vite is installed, init it
    viteInstall.on('close', () => {
        // init vite
        const viteInit = spawn(npmPath, ['init', 'vite'], {stdio: 'inherit'});
        viteInit.on('error', () => {
            console.log(chalk.red('Error while initializing Vite !'));
        });
    });
}