import fs from "fs";
import {templateDirectory} from "./Directory";
import {QuestionChoice} from "../types";

const availableTemplates = fs.readdirSync(templateDirectory);
export const templates: QuestionChoice = [
    {
        name: 'template',
        type: 'list',
        message: 'Quelle template voulez-vous utiliser ?',
        choices: availableTemplates
    },
    {
        name: 'name',
        type: 'input',
        message: 'Nommez votre projet : '
    }
];