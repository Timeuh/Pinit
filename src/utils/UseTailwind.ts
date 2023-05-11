import {spawn} from "child_process";
import chalk from "chalk";
import {npmPath, npxPath, projectParams} from "../stores/appConsts";
import fs from "fs";
import {indexCssTailwind, tailwindBaseConfig, tailwindConfig} from "../stores/TailwindContent";
import path from "path";

// init tailwind with vite js
export const initTailwind = (projectType: string) => {
    // init params for tailwind installation and initialization
    const installParams = ['install', '-D', 'tailwindcss'];
    const initParams = ['tailwindcss', 'init'];
    let confTemplate = tailwindConfig;

    // if the project type is classic
    if (projectType === 'classic'){
        // use alternative template
        confTemplate = tailwindBaseConfig;
        process.chdir('../');
    }

    // if the project type is vite js
    if (projectType === 'vite'){
        installParams.push('postcss', 'autoprefixer');
        initParams.push('-p');
    }

    // install tailwind
    const installTailwind = spawn(npmPath, installParams, {stdio: 'ignore'});
    installTailwind.on('error', () => {
        console.log(chalk.red('Error while installing Tailwind CSS !'));
    });

    // when tailwind is installed
    installTailwind.on('close', () => {
        // initialize tailwind
        const initTailwind = spawn(npxPath, initParams, {stdio: 'inherit'});
        initTailwind.on('error', () => {
            console.log(chalk.red('Error while initializing Tailwind CSS !'));
        });

        // when tailwind is initialized
        initTailwind.on('close', () => {
            // clear tailwind.config.js
            fs.truncate('tailwind.config.js', 0, () => {
                // write our config in tailwind.config.js
                fs.writeFile('tailwind.config.js', confTemplate, () => {
                    // check if style.css exists
                    fs.access('style.css', fs.constants.F_OK, (err) => {
                        let cssFile = 'style.css';

                        // if style.css doesn't exist
                        if (err){
                            // change directory to src
                            const srcDir = path.resolve(process.cwd(), 'src');
                            process.chdir(srcDir);
                            // and use index.css
                            cssFile = 'index.css';
                        }

                        // if the project type is classic
                        if (projectType === 'classic'){
                            // create index.css
                            fs.writeFile('index.css', indexCssTailwind, (err) => {
                                if (err) {
                                    console.log(chalk.red('Error while creating index.css file !'));
                                    return;
                                }
                            });
                        } else {
                            // clear css file
                            fs.truncate(cssFile, 0, () => {
                                // write tailwind config in css file
                                fs.writeFile(cssFile, indexCssTailwind, () => {});
                            });
                        }
                    });
                });
            });
        });
    });
}