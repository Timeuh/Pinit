import fs from "fs";
import {templateDirectory} from "./Directory";
import {QuestionChoice} from "../types/types";

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