import {CreateProjectAnswers} from "../types/types";
import fs from "fs";
import chalk from "chalk";
import path from "path";
import {spawn} from "child_process";
import {npmPath, npxPath} from "../stores/appConsts";
import {initEslint} from "./useEslint";

// create a project folder and init all the dependencies
export const createProject = (answers: CreateProjectAnswers) => {
    // if the user chose to not use a web framework
    if (answers.webFramework === 'None') {
        // create new directory
        fs.mkdir(answers.name, (err) => {
            if (err) {
                console.log(chalk.red('Error while creating project folder !'));
                return;
            }

            // change directory to the new one
            const directoryDir = path.resolve(process.cwd(), answers.name);
            process.chdir(directoryDir);

            // init npm
            const npmInit = spawn(npmPath, ['init', '-y'], {stdio: 'ignore'});
            npmInit.on('error', () => {
                console.log(chalk.red('Error while initializing npm !'));
            });

            // init typescript if needed
            initTypescript(answers.webTech, npmPath);

            // init eslint if needed
            if (answers.eslint){
                initEslint(npmPath);
            }
        });
    } else {
        initFramework(answers.name, npxPath);
    }
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

// init the chosen web framework
const initFramework = (projectName: string, npxPath: string) => {
    // init react project
    const reactInit = spawn(npxPath, ['create-react-app', projectName], {stdio: 'ignore'});
    reactInit.on('error', () => {
        console.log(chalk.red('Error while initializing React !'));
    });
}