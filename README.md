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
You must use the command in the directory where you want to create your project.

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