# ⌨️ Pinit - CLI Project Bootstrapper
## 📝 Description
**Pinit** is a CLI to help you bootstrap your projects. 

It's a simple tool that will help you creating new projects, based on templates,
or by choosing technologies, so you don't have to create the same files over and over again.

## 📚 Documentation

### 📦 Installation
You can install **Pinit** using `npm`:
```
npm link
```
From the project directory.

### 🚀 Usage
To use **Pinit**, you can run the following command :
```
pinit
```
And let the CLI guide you through the process.

### ⚠️ Warning
The command will ceate a project in a new directory, at your current directory. You cannot choose where the project will be created.

### 📋 Templates
You can create your own templates, and use them with **Pinit**.

To do so, you must create a folder in the `templates` directory, and add a `package.json` file in it.

This `package.json` file needs to contain at least the following properties:
```json
{
  "name": "template-name",
  "version": "1.0.0",
  "description": "Template description",
  "author": "Your name",
  "license": "MIT"
}
```

For the rest of the template, you can add any file you want, in any directory you want.

I recommend creating your project in a separate directory, add all the dependencies you want, and then copy the files in your `template` directory.

Once everything is ready, you will see your template in the list when you run the `pinit` command.

## 🚩 Troubleshooting
### You may have problems with pinit, I will guide you through the ones I know of :

Q : I use a template, but there's a problem with npm install in it

A : You may not have the npm or npx executable set in your path, causing pinit to not know where these commands are. For windows, the executable is in `C:\Users\[your-name]\AppData\Roaming\npm`. 
You need to find two files : `npm.cmd` and `npx.cmd`. If they aren't here, they are in the directory where you installed NodeJs, just copy them in the previous directory.

### If you face another issue, please submit one in this repository, I will check it as soon as I can.
