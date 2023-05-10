// init the chosen web framework
import chalk from "chalk";
import {spawn} from "child_process";
import {npmPath, npxPath} from "../stores/appConsts";
import {initEslint} from "./UseEslint";
import path from "path";

export const initReact = (projectName: string, useEslint: boolean, useTypescript: boolean) => {
    const commandArgs = ['create-react-app', projectName];

    if (useTypescript){
        commandArgs.push('--template', 'typescript');
    }

    // init react project
    const reactInit = spawn(npxPath, commandArgs, {stdio: 'ignore'});
    reactInit.on('error', () => {
        console.log(chalk.red('Error while initializing React !'));
    });

    reactInit.on('close', () => {
        // init eslint if needed
        if (useEslint){
            // change directory to the new one
            const directoryDir = path.resolve(process.cwd(), projectName);
            process.chdir(directoryDir);

            // init eslint
            initEslint(npmPath);
        }
    });
}