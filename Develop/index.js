// TODO: Include packages needed for this application
const { rejects } = require('assert');
const fs = require('fs');
const inquirer = require('inquirer');
const { resolve } = require('path');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [{
        type: 'input',
        name: 'title',
        message: 'What is the tile of your project?',
        validate: (titleName) => {
            if (titleName) {
                return true;
            } else {
                console.log('Please enter a project title!');
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license does your project use?',
        choices: ['None', 'MIT', 'Apache 2.0', 'GNU GPL v3'],
        validate: (licenseInput) => {
            if (licenseInput) {
                return true;
            } else {
                console.log('Please select one of the options!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a project description',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What steps are need to install project?',
        validate: (installationInput) => {
            if (installationInput) {
                return true;
            } else {
                console.log('Please provide installation steps!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the use of your project?',
        validate: (usageInput) => {
            if (usageInput) {
                return true;
            } else {
                console.log('Please a use for your project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'What guidlines must others follow in order to contribute?',
    },
    {
        type: 'input',
        name: 'testing',
        message: 'How do you test this project?',
        validate: (testingInput) => {
            if (testingInput) {
                return true;
            } else {
                console.log('Please explain how to test this project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your github usename so others can reach out?',
        validate: (githubInput) => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please provide your username on github so others can reach out!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email so there is another way to be connect or ask the question?',
        validate: (emailInput) => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please provide an email!');
                return false;
            }
        }
    }
];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}
const writeToFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./generateREADME.md', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
            });
        });
    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function(data) {
            console.log(data);
            let fileContent = generateMarkdown(data);
            writeToFile(fileContent)
        });
}

// Function call to initialize app
init();

module.exports = questions;