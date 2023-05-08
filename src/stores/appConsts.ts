import chalk from "chalk";
import {QuestionChoice} from "../types/types";
import fs from "fs";
import path, {join} from "path";
import {fileURLToPath} from "url";

// get the templates directory
const currentFileUrl = import.meta.url;
const templateDirectory = path.resolve(decodeURI(fileURLToPath(currentFileUrl)), '../../src/templates');

// get npm and npx paths
const appData = process.env.APPDATA || '';
export const npmPath = join(appData, 'npm', 'npm.cmd');
export const npxPath = join(appData, 'npm', 'npx.cmd');

//choices for web tech of project, between Javascript and Typescript
export const webTech = ['Javascript', 'Typescript'];

//choices for web framework of project, between React, Vue and None
export const webFramework = ['React', 'None'];

// create array of questions for pinit when choosing a template
const availableTemplates = fs.readdirSync(templateDirectory);
export const templates: QuestionChoice = [
    {
        name: 'template',
        type: 'list',
        message: 'Which template would you like to choose ?',
        choices: availableTemplates
    },
    {
        name: 'name',
        type: 'input',
        message: 'Choose a name for your project : '
    }
];

// create a question to ask the user if he wants to use a template
export const useTemplate: QuestionChoice = [
    {
        name: 'useTemplate',
        type: 'confirm',
        message: chalk.cyan('Would you like to use a template ? (Y/n)'),
    }
];

// create a question to ask the user if he wants to use vite js
export const useVite: QuestionChoice = [
    {
        name: 'useVite',
        type: 'confirm',
        message: chalk.cyan('Would you like to use Vite Js ? (Y/n)'),
    }
];

// create a question to ask the user if he wants to use a framework
export const useFramework: QuestionChoice = [
    {
        name: 'chosenFramework',
        type: 'list',
        message: 'Which framework would you like to choose ?',
        choices: webFramework
    }
];

// create a question to ask the user if he wants to use a framework
export const useWebTech: QuestionChoice = [
    {
        name: 'webTech',
        type: 'list',
        message: 'Which tech would you like to use ?',
        choices: webTech
    }
];

// create questions for vite js
export const viteParams: QuestionChoice = [
    {
        name: 'useEslint',
        type: 'confirm',
        message: chalk.cyan('Would you like to use Eslint ? (Y/n)'),
    },
    {
        name: 'name',
        type: 'input',
        message: 'Choose a name for your project : ',
    }
];

// create array of questions for pinit when not choosing a template
export const projectParams: QuestionChoice = [
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
];