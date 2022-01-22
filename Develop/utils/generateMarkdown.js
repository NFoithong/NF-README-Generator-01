const fs = require('fs');
const inquirer = require('inquirer');
const index = require('../index.js');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    let badge = '';
    if (license === 'MIT') {
        badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]';
    } else if (license === 'Apache 2.0') {
        badge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]';
    } else if (license === 'GNU GPL v3') {
        badge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]';
    } else {
        badge = '';
    }
    return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    let licenseLink = '';
    if (license === 'MIT') {
        licenseLink = 'https://opensource.org/licenses/MIT';
    } else if (license === 'Apache 2.0') {
        licenseLink = 'https://opensource.org/licenses/Apache-2.0';
    } else if (license === 'GNU GPL v3') {
        licenseLink = 'https://www.gnu.org/licenses/gpl-3.0';
    } else {
        licenseLink = '';
    }
    return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    let licenseSection = '';
    if (license === 'None') {
        licenseSection = '';
    } else {
        licenseSection = `License: ${license}`
    }
    return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}
    
    ## ${renderLicenseSection(data.license)} ${renderLicenseBadge(data.license)}
    ### ${renderLicenseLink(data.license)}

    ## Table of Contents:
    ### [Description](#description)
    ### [Installation](#installation)
    ### [Usage](#usage)
    ### [License](#license)
    ### [Contributing](#contributing)
    ### [Tesing](#tesing)
    ### [Question](#question)

    ## Description
    ### ${data.description}

    ## Installation
    ### ${data.installation}

    ## Usage
    ### ${data.usage}
    
    ## License
    ### ${data.license}
    
    ## Contributing
    ### ${data.contributing}
    
    ## Tesing
    ### Run the following commands in your terminal to test this app:
    ### ${data.tesing}
    
    ## Question
    ### If you have any question, you may contact me at either
    ### Github: https://github.com/${data.github}
    ### or
    ### email: ${data.email}
`;
}

module.exports = generateMarkdown;