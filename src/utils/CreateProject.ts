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

        // get npm and npx paths
        const appData = process.env.APPDATA || '';
        const npmPath = join(appData, 'npm', 'npm.cmd');
        const npxPath = join(appData, 'npm', 'npx.cmd');

        // init npm
        const npmInit = spawn(npmPath, ['init', '-y'], {stdio: 'ignore'});
        npmInit.on('error', () => {
            console.log(chalk.red('Error while initializing npm !'));
        });

        // init typescript if needed
        initTypescript(answers.webTech, npmPath);

        // init eslint if needed
        initEslint(answers.eslint, npmPath);
    });
}

// init Typescript if the user chose it
const initTypescript = (webTech: string, npmPath: string) => {
    if (webTech === 'Javascript'){
        return;
    }

    // install typescript
    const tsInit = spawn(npmPath, ['install', 'typescript', '--save-dev'], {stdio: 'ignore'});
    tsInit.on('error', () => {
        console.log(chalk.red('Error while initializing Typescript !'));
    });
}

// init Eslint if the user chose it
const initEslint = (eslint: boolean, npmPath: string) => {
    if (!eslint){
        return;
    }

    // install eslint
    const eslintInstall = spawn(npmPath, ['install', 'eslint', '--save-dev'], {stdio: 'ignore'});
    eslintInstall.on('error', () => {
        console.log(chalk.red('Error while installing Eslint !'));
    });

    // when eslint is installed, init it
    eslintInstall.on('close', () => {
        // init eslint with default values
        const eslintInit = spawn(npmPath, ['init', '@eslint/config'], {stdio: 'inherit'});
        eslintInit.on('error', () => {
            console.log(chalk.red('Error while initializing Eslint !'));
        });
    });
}