// init the chosen web framework
import chalk from "chalk";
import {spawn} from "child_process";
import {npmPath, npxPath} from "../stores/appConsts";
import {initEslint} from "./UseEslint";
import path from "path";
import {initTailwind} from "./UseTailwind";

export const initReact = (projectName: string, useEslint: boolean, useTypescript: boolean, useTailwind: boolean) => {
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
        // change directory to the new one
        const directoryDir = path.resolve(process.cwd(), projectName);
        process.chdir(directoryDir);

        // init eslint if needed
        if (useEslint){
            // init eslint
            initEslint(npmPath);
        }

        // init tailwind if needed
        if (useTailwind){
            // init tailwind
            initTailwind('react');
        }
    });
}