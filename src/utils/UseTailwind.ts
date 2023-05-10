import {spawn} from "child_process";
import chalk from "chalk";
import {npmPath, npxPath} from "../stores/appConsts";
import fs from "fs";
import {indexCssTailwind, tailwindConfig} from "../stores/TailwindContent";
import path from "path";

// init tailwind with vite js
export const initTailwindVite = () => {
    // install tailwind
    const installTailwind = spawn(npmPath, ['install', '-D', 'tailwindcss', 'postcss', 'autoprefixer'], {stdio: 'ignore'});
    installTailwind.on('error', () => {
        console.log(chalk.red('Error while installing Tailwind CSS !'));
    });

    // when tailwind is installed
    installTailwind.on('close', () => {
        // initialize tailwind
        const initTailwind = spawn(npxPath, ['tailwindcss', 'init', '-p'], {stdio: 'inherit'});
        initTailwind.on('error', () => {
            console.log(chalk.red('Error while initializing Tailwind CSS !'));
        });

        // when tailwind is initialized
        initTailwind.on('close', () => {
            // clear tailwind.config.js
            fs.truncate('tailwind.config.js', 0, () => {
                // write our config in tailwind.config.js
                fs.writeFile('tailwind.config.js', tailwindConfig, () => {
                    // check if style.css exists
                    fs.access('style.css', fs.constants.F_OK, (err) => {
                        let cssFile = 'style.css';

                        // if style.css doesn't exist
                        if (err) {
                            // change directory to src
                            const srcDir = path.resolve(process.cwd(), 'src');
                            process.chdir(srcDir);
                            // and use index.css
                            cssFile = 'index.css';
                        }

                        // clear css file
                        fs.truncate(cssFile, 0, () => {
                            // write tailwind config in css file
                            fs.writeFile(cssFile, indexCssTailwind, () => {});
                        });
                    });
                });
            });
        });
    });
}