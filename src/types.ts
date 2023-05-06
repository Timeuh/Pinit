export type Question = {
    name: string;
    type: string;
    message: string;
    choices?: Array<string>;
}

export type QuestionChoice = Array<Question>;