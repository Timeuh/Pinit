import inquirer from "inquirer";
import chalk from "chalk";
import {templates} from "./utils/ChooseTemplate";
import {useTemplate} from "./utils/UseTemplate";
import {techs} from "./utils/ChooseTechs";
import {createProject} from "./utils/CreateProject";

export function cli() {
    console.log(chalk.magenta('Create your project !'));

    inquirer.prompt(useTemplate)
        .then(answers => {
            if (answers.useTemplate) {
                inquirer.prompt(templates)
                    .then(answers => {
                        console.log(answers);
                    });
            } else {
                inquirer.prompt(techs)
                    .then(answers => {
                        createProject(answers);
                    });
            }
        });
}