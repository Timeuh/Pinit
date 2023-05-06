import chalk from "chalk";
import {QuestionChoice} from "../types/types";

export const useTemplate: QuestionChoice = [
    {
        name: 'useTemplate',
        type: 'confirm',
        message: chalk.cyan('Would you like to use a template ? (Y/n)'),
    }
];