import {spawn} from "child_process";
import chalk from "chalk";

// init Typescript if the user chose it
export const initTypescript = (webTech: string, npmPath: string) => {
    if (webTech === 'Javascript'){
        return;
    }

    // install typescript
    const tsInit = spawn(npmPath, ['install', 'typescript', '--save-dev'], {stdio: 'ignore'});
    tsInit.on('error', () => {
        console.log(chalk.red('Error while initializing Typescript !'));
    });
}