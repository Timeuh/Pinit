// define a question template to use with inquirer
export type Question = {
    name: string;
    type: string;
    message: string;
    choices?: Array<string>;
}

// define an array of questions, passed as parameter to inquirer.prompt()
export type QuestionChoice = Array<Question>;

// define the answers of the user, after inquirer.prompt()
export type CreateProjectAnswers = {
    webTech: string;
    webFramework: string;
    vite: boolean;
    tailwind: boolean;
    eslint: boolean;
    name: string;
}