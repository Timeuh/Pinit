import inquirer from "inquirer";
import chalk from "chalk";
import {templates} from "./utils/ChooseTemplate";
import {useTemplate} from "./utils/UseTemplate";
import {techs} from "./utils/ChooseTechs";
import {createProject} from "./utils/CreateProject";

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
                // if no, ask him which techs he wants to use
                inquirer.prompt(techs)
                    .then(answers => {
                        createProject(answers);
                    });
            }
        });
}