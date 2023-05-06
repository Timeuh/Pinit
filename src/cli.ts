import inquirer from "inquirer";
import chalk from "chalk";
import {templates} from "./utils/ChooseTemplate";
import {useTemplate} from "./utils/UseTemplate";

export function cli() {
    console.log(chalk.magenta('Générez votre projet !'));

    inquirer.prompt(useTemplate)
        .then(answers => {
            if (answers.useTemplate) {
                inquirer.prompt(templates)
                    .then(answers => {
                        console.log(answers);
                    });
            }
        });
}