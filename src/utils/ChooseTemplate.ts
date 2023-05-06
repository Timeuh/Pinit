import fs from "fs";
import {templateDirectory} from "./Directory";
import {QuestionChoice} from "../types";

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
        message: 'Choose name for your project : '
    }
];