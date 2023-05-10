import chalk from "chalk";
import {spawn} from "child_process";
import {npmPath} from "../stores/appConsts";
import path from "path";
import {initEslint} from "./UseEslint";
import {initTailwindVite} from "./UseTailwind";

// init Vite js if the user chose it
export const initVite = (useEslint: boolean, projectName: string, useTailwind: boolean) => {
    // init vite
    const viteInit = spawn(npmPath, ['init', 'vite', projectName], {stdio: 'inherit'});
    viteInit.on('error', () => {
        console.log(chalk.red('Error while initializing Vite !'));
    });

    // when vite is initialized
    viteInit.on('close', () => {
        // change directory to the new one
        const directoryDir = path.resolve(process.cwd(), projectName);
        process.chdir(directoryDir);

        // is the user wants eslint
        if (useEslint){
            // init eslint
            initEslint(npmPath);
        }

        // if the user wants tailwind
        if (useTailwind){
            // init tailwind
            initTailwindVite();
        }
    });
}