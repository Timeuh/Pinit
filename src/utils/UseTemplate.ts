import chalk from "chalk";
import {QuestionChoice} from "../types";

export const useTemplate: QuestionChoice = [
    {
        name: 'useTemplate',
        type: 'confirm',
        message: chalk.cyan('Voulez-vous utiliser une template ? (Y/n)'),
    }
];