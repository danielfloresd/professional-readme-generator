

// TODO: Include packages needed for this application
// Require inquirer
const inquirer = require('inquirer');
// Require fs
const fs = require('fs');
// Require showdown
const showdown = require('showdown');
// Require readme.js
const markdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project? (Required)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter the title of your project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project. (Required)',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please enter a description of your project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide installation instructions for your project. (Required)',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('Please enter installation instructions for your project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide usage information for your project. (Required)',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Please enter usage information for your project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'license',
        message: 'Please provide license information for your project. (Required)',
        type: 'list',
        choices: ['MIT', 'Apache-2.0', 'GPL-3.0', 'BSL-1.0', 'Unlicense'],
        validate: licenseInput => {
            if (licenseInput) {
                return true;
            } else {
                console.log('Please enter license information for your project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Please provide contribution guidelines for your project. (Required)',
        validate: contributingInput => {
            if (contributingInput) {
                return true;
            } else {
                console.log('Please enter contribution guidelines for your project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please provide test instructions for your project. (Required)',
        validate: testsInput => {
            if (testsInput) {
                return true;
            } else {
                console.log('Please enter test instructions for your project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Please provide questions for your project. (Required)',
        validate: questionsInput => {
            if (questionsInput) {
                return true;
            } else {
                console.log('Please enter questions for your project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'programming_languages',
        message: 'Please provide programming languages for your project. (Required)',
        validate: programming_languagesInput => {
            if (programming_languagesInput) {
                return true;
            } else {
                console.log('Please enter programming languages for your project!');
                return false;
            }
        },
        type: 'checkbox',
        choices: ['HTML', 'CSS', 'JavaScript']
    },
    {
        type: 'input',
        name: 'website',
        message: 'Please enter your website URL. (Required)',
        validate: website => {
            if (website) {
                return true;
            } else {
                console.log('Please enter your URL!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please enter your GitHub Username. (Required)',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter your GitHub Username!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address. (Required)',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter your email address!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'filename',
        message: 'Enter file name.',
        default: './dist/README.md'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) throw new Error(err);

        console.log(`README complete! Check out ${fileName} to see the output!`);
    });
}

// TODO: Create a function to initialize app
function init() {
    // Prompt for README attributes
    let readmePageContent ="";
    inquirer
        .prompt(questions)
        .then(readmeData => {
            readmePageContent = markdown.generateMarkdown(readmeData);

            let fileName = readmeData.filename;
            writeToFile(fileName, readmePageContent);
        }
        );
}

// Function call to initialize app
init();


