// init the chosen web framework
import chalk from "chalk";
import {spawn} from "child_process";
import {npxPath} from "../stores/appConsts";

export const initReact = (projectName: string) => {
    // init react project
    const reactInit = spawn(npxPath, ['create-react-app', projectName], {stdio: 'ignore'});
    reactInit.on('error', () => {
        console.log(chalk.red('Error while initializing React !'));
    });
}