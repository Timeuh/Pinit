export type Question = {
    name: string;
    type: string;
    message: string;
    choices?: Array<string>;
}

export type QuestionChoice = Array<Question>;

export type CreateProjectAnswers = {
    webTech: string;
    webFramework: string;
    tailwind: boolean;
    eslint: boolean;
    name: string;
}