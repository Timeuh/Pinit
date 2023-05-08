import inquirer from "inquirer";
import chalk from "chalk";
import {createProject} from "./utils/CreateProject";
import {initVite} from "./utils/UseVite";
import {techs, templates, useTemplate, useVite, viteParams} from "./stores/appConsts";

// main function of the CLI
export function cli() {
    console.log(chalk.magenta('Create your project !'));

    // ask the user if he wants to use a template
    inquirer.prompt(useTemplate)
        .then(answers => {
            if (answers.useTemplate) {
                // if yes, ask him which one
                inquirer.prompt(templates)
                    .then(answers => {
                        console.log(answers);
                    });
            } else {
                inquirer.prompt(useVite)
                    .then(answers => {
                        if (answers.useVite) {
                            inquirer.prompt(viteParams)
                                .then(answers => {
                                    if (answers.useEslint){
                                        // use vite with eslint
                                        initVite(true, answers.name);
                                    } else {
                                        // use vite without eslint
                                        initVite(false, answers.name);
                                    }
                                });
                        } else {
                            // if no, ask him which techs he wants to use
                            inquirer.prompt(techs)
                                .then(answers => {
                                    createProject(answers);
                                });
                        }
                    });
            }
        });
}