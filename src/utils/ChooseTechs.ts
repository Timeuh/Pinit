import {QuestionChoice} from "../types/types";
import {webFramework, webTech} from "../stores/appConsts";

// create array of questions for pinit when not choosing a template
export const techs: QuestionChoice = [
    {
        name: 'webTech',
        type: 'list',
        message: 'Which tech would you like to use ?',
        choices: webTech
    },
    {
        name: 'webFramework',
        type: 'list',
        message: 'Which framework would you like to choose ?',
        choices: webFramework
    },
    {
        name: 'vite',
        type: 'confirm',
        message: 'Would you like to use Vite Js ? (Y/n)'
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
        message: 'Choose a name for your project : '
    }
]