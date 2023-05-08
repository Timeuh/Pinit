import inquirer from "inquirer";
import chalk from "chalk";
import {createProject} from "./utils/CreateProject";
import {initVite} from "./utils/UseVite";
import {projectParams, templates, useFramework, useTemplate, useVite, useWebTech, viteParams} from "./stores/appConsts";

// main function of the CLI
export function cli() {
    console.log(chalk.magenta('Create your project !'));

    // ask the user if he wants to use a template
    inquirer.prompt(useTemplate)
        .then(template => {
            if (template.useTemplate) {
                // if yes, ask him which one
                inquirer.prompt(templates)
                    .then(answers => {
                        console.log(answers);
                    });
            } else {
                // if no, ask if he wants to use vite js
                inquirer.prompt(useVite)
                    .then(vite => {
                        // if yes, ask him if he wants eslint and the project name
                        if (vite.useVite) {
                            inquirer.prompt(viteParams)
                                .then(viteParams => {
                                    if (viteParams.useEslint){
                                        // use vite with eslint
                                        initVite(true, viteParams.name);
                                    } else {
                                        // use vite without eslint
                                        initVite(false, viteParams.name);
                                    }
                                });
                        } else {
                            // if no, ask him which framework he wants to use
                            inquirer.prompt(useFramework)
                                .then(framework => {
                                    if (framework.chosenFramework === 'None') {
                                        // if no framework, ask him which tech he wants to use
                                        inquirer.prompt(useWebTech)
                                            .then(tech => {
                                                // then ask for project params
                                                inquirer.prompt(projectParams)
                                                    .then(projectParams => {
                                                        // create project with all the params
                                                        createProject(framework.chosenFramework, tech, projectParams);
                                                    });
                                            });
                                    } else {
                                        // ask for project params
                                        inquirer.prompt(projectParams)
                                            .then(projectParams => {
                                                // create project with chosen framework and all the params
                                                createProject(framework.chosenFramework, 'Javascript', projectParams);
                                            });
                                    }
                                });
                        }
                    });
            }
        });
}