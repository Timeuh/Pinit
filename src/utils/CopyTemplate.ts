import fs from "fs";
import {promisify} from "util";
import ncp from "ncp";
import {npmPath, templateDirectory} from "../stores/appConsts";
import chalk from "chalk";
import {spawn} from "child_process";

// copy the template
export const copyTemplate = (templateName: string, projectName: string) => {
    // create the project folder
    fs.mkdir(projectName, () => {
        //move into the project folder
        process.chdir(projectName);

        const copy = promisify(ncp);

        // copy the template
        copy(`${templateDirectory}/${templateName}`, process.cwd(), {clobber: false})
            .then(() => {
                // when the project is ready, install npm packages
                const installNpm = spawn(npmPath, ['install'], {stdio: 'inherit'});

                // when npm install is done, log a message
                installNpm.on('close', () => {
                    console.log(chalk.green('Project ready !'));
                });

                // if an error occurred during npm install, log a message
                installNpm.on('error', (err) => {
                    console.log(chalk.red('Error occurred during npm install'));
                });
            })
            .catch(err => {
                console.log(chalk.red('Error occurred during template copy'));
            });
    });
}