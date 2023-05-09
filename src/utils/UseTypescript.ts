import {spawn} from "child_process";
import chalk from "chalk";
import {npmPath} from "../stores/appConsts";

// init Typescript if the user chose it
export const initTypescript = () => {
    // install typescript
    const tsInit = spawn(npmPath, ['install', 'typescript', '--save-dev'], {stdio: 'ignore'});
    tsInit.on('error', () => {
        console.log(chalk.red('Error while initializing Typescript !'));
    });
}