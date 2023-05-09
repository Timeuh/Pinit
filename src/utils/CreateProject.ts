import {CreateProjectAnswers} from "../types/types";
import fs from "fs";
import chalk from "chalk";
import path from "path";
import {spawn} from "child_process";
import {npmPath} from "../stores/appConsts";
import {initEslint} from "./UseEslint";
import {initReact} from "./UseReact";
import {initTypescript} from "./UseTypescript";

// create a project folder and init all the dependencies
export const createProject = (chosenFramework: string, webTech: string, answers: CreateProjectAnswers) => {
    // if the user chose to not use a web framework
    if (chosenFramework === 'None') {
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
            if (webTech === 'Typescript'){
                initTypescript();
            }

            // init eslint if needed
            if (answers.eslint){
                initEslint(npmPath);
            }

            // create src folder
            fs.mkdir('src', (err) => {
                if (err) {
                    console.log(chalk.red('Error while creating src folder !'));
                    return;
                }

                // change directory to src
                const srcDir = path.resolve(process.cwd(), 'src');
                process.chdir(srcDir);

                // if we use typescript, init index.ts
                if (webTech === 'Typescript'){
                    fs.writeFile('index.ts', '', (err) => {
                        if (err) {
                            console.log(chalk.red('Error while creating index.ts file !'));
                            return;
                        }
                    });
                } else {
                    // init index.js
                    fs.writeFile('index.js', '', (err) => {
                        if (err) {
                            console.log(chalk.red('Error while creating index.js file !'));
                            return;
                        }
                    });
                }
            });
        });
    } else if (chosenFramework === 'React') {
        // if the user chose to use React
        initReact(answers.name, answers.eslint);
    }
}