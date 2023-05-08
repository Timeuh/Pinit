import {CreateProjectAnswers} from "../types/types";
import fs from "fs";
import chalk from "chalk";
import path from "path";
import {spawn} from "child_process";
import {npmPath} from "../stores/appConsts";
import {initEslint} from "./UseEslint";
import {initReact} from "./UseReact";

// create a project folder and init all the dependencies
export const createProject = (framework: string, webTech: string, answers: CreateProjectAnswers) => {
    // if the user chose to not use a web framework
    if (framework === 'None') {
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
            initTypescript(webTech, npmPath);

            // init eslint if needed
            if (answers.eslint){
                initEslint(npmPath);
            }
        });
    }

    if (framework === 'React') {
        initReact(answers.name);
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