import {QuestionChoice} from "../types/types";
import {webFramework, webTech} from "../stores/appConsts";

export const techs: QuestionChoice = [
    {
        name: 'webTech',
        type: 'choice',
        message: 'Which tech would you like to use ?',
        choices: webTech
    },
    {
        name: 'webFramework',
        type: 'choice',
        message: 'Which framework would you like to choose ?',
        choices: webFramework
    },
    {
        name: 'tailwind',
        type: 'confirm',
        message: 'Would you like to use Tailwind CSS ? (Y/n)'
    },
    {
        name: 'eslint',
        type: 'confirm',
        message: 'Would you like to use Eslint ? (Y/n)'
    },
    {
        name: 'name',
        type: 'input',
        message: 'Choose name for your project : '
    }
]