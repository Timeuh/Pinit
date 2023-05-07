import {CreateProjectAnswers} from "../types/types";
import fs from "fs";
import chalk from "chalk";
import path from "path";
import {join} from "path";
import {spawn} from "child_process";

export const createProject = (answers: CreateProjectAnswers) => {
    fs.mkdir(answers.name, (err) => {
        if (err) {
            console.log(chalk.red('Error while creating project folder !'));
            return;
        }

        const directoryDir = path.resolve(process.cwd(), answers.name);
        process.chdir(directoryDir);

        const appData = process.env.APPDATA ? process.env.APPDATA : '';
        const npmPath = join(appData, 'npm', 'npm.cmd');

        const npmInit = spawn(npmPath, ['init', '-y'], {stdio: 'ignore'});
        npmInit.on('error', (err) => {
            console.log(chalk.red('Error while initializing npm !'));
        });

        initTypescript(answers.webTech, npmPath);
    });
}

const initTypescript = (webTech: string, npmPath: string) => {
    if (webTech === 'Javascript'){
        return;
    }

    const tsInit = spawn(npmPath, ['install', 'typescript', '--save-dev'], {stdio: 'ignore'});
    tsInit.on('error', (err) => {
        console.log(chalk.red('Error while initializing Typescript !'));
    });
}