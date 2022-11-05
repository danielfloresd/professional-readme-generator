// Generate README.md file from form input
function generateMarkdown(data) {
    return `# ${data.title}
    
    ## Description
    
    ${data.description}
    
    ## Table of Contents
    
    * [Installation](#installation)
    
    * [Usage](#usage)
    
    * [License](#license)
    
    * [Contributing](#contributing)
    
    * [Tests](#tests)
    
    * [Questions](#questions)
    
    ## Installation
    
    ${data.installation}
    
    ## Usage
    
    ${data.usage}
    
    ## License
    
    ${data.license}
    
    ## Contributing
    
    ${data.contributing}
    
    ## Tests
    
    ${data.tests}
    
    ## Questions
    
    ${data.questions}
    
    `;
}

// module.exports = generateMarkdown;

// Path: professional-readme-generator\index.js
// Import modules
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./script.js");

// Array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Please provide a description of your project."
    },
    {
        type: "input",
        name: "installation",
        message: "Please provide installation instructions for your project."
    },
    {
        type: "input",
        name: "usage",
        message: "Please provide usage information for your project."
    },
    {
        type: "input",
        name: "license",
        message: "Please provide license information for your project."
    },
    {
        type: "input",
        name: "contributing",
        message: "Please provide contribution guidelines for your project."
    },
    {
        type: "input",
        name: "tests",
        message: "Please provide test instructions for your project."
    },
    {
        type: "input",
        name: "questions",
        message: "Please provide your contact information for questions about your project."
    }
];

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            throw err;
        }
        console.log("README.md file generated!");
    });
}

// Function to initialize program
function init() {
    inquirer.prompt(questions).then(answers => {
        writeToFile("README.md", generateMarkdown(answers));
    });
}

// Function call to initialize program
init();

// Path: professional-readme-generator\package.json
// {
//     "name": "professional-readme-generator",
//     "version": "1.0.0",
//     "description": "A command-line application that dynamically generates a professional README.md file from a user's input using the Inquirer package.",
//     "main": "index.js",
//     "scripts": {
//         "test": "echo \"Error: no test specified\" && exit 1"
//     },
//     "repository": {
//         "type": "git",
//         "url": "git+
// [...]   
