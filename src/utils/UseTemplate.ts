import chalk from "chalk";
import {QuestionChoice} from "../types/types";

// create a question to ask the user if he wants to use a template
export const useTemplate: QuestionChoice = [
    {
        name: 'useTemplate',
        type: 'confirm',
        message: chalk.cyan('Would you like to use a template ? (Y/n)'),
    }
];