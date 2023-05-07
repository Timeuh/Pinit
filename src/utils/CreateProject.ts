import {CreateProjectAnswers} from "../types/types";
import fs from "fs";
import chalk from "chalk";
import path from "path";
import {join} from "path";
import {spawn} from "child_process";

// create a project folder and init all the dependencies
export const createProject = (answers: CreateProjectAnswers) => {
    // create new directory
    fs.mkdir(answers.name, (err) => {
        if (err) {
            console.log(chalk.red('Error while creating project folder !'));
            return;
        }

        // change directory to the new one
        const directoryDir = path.resolve(process.cwd(), answers.name);
        process.chdir(directoryDir);

        // get npm path
        const appData = process.env.APPDATA ? process.env.APPDATA : '';
        const npmPath = join(appData, 'npm', 'npm.cmd');

        // init npm
        const npmInit = spawn(npmPath, ['init', '-y'], {stdio: 'ignore'});
        npmInit.on('error', (err) => {
            console.log(chalk.red('Error while initializing npm !'));
        });

        // init typescript if needed
        initTypescript(answers.webTech, npmPath);
    });
}

// init Typescript if the user chose it
const initTypescript = (webTech: string, npmPath: string) => {
    if (webTech === 'Javascript'){
        return;
    }

    const tsInit = spawn(npmPath, ['install', 'typescript', '--save-dev'], {stdio: 'ignore'});
    tsInit.on('error', (err) => {
        console.log(chalk.red('Error while initializing Typescript !'));
    });
}