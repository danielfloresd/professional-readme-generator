// Helper function to check if script runs in browser or node
function isNode() {
  return typeof process !== 'undefined' && process.versions != null && process.versions.node != null;
}

// Requiere the fs module

const fs = isNode() ? require('fs') : null;


function renderBadge(type, name, color) {
  if (!name)
    return "";

  let aType = type || 'badge';
  let aName = name;
  let aColor = color || 'black';
  return `![GitHub ${type}](https://img.shields.io/badge/${aType}-${aName}-${aColor}.svg)`;
}

function renderTableOfContents(title, description, installation, usage, license, contributing, tests, questions, website, programming_languages) {
  let tableOfContents = `
  * [Description](#description)
  * [Installation](#🛠️installation)
  * [Usage](#💻usage)
  * [License](#📛license)
  * [Contributing](#🤝contributing)
  * [Tests](#📃tests)
  * [Questions](#❓questions)
  * [Website](#🌐website)
  * [Programming Languages](#👨‍💻programming-languages)
`;
  return tableOfContents;
}

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `[![badge-license](https://badgen.net/badge/license/${license}/blue)](https://choosealicense.com/licenses/${license.toLowerCase()})`;
  }
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  //  Define the license link
  return `For more information [click here](https://choosealicense.com/licenses/${license.toLowerCase()}).`;
}


function renderSection(section, content) {
  return `## ${section}    
<p>${content}</p>   
      `;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  // Read the license file and return the contents
  return `## 📛License    
    Project license: ${license}   
${renderLicenseFile(license)}   
      
${renderLicenseLink(license)}   
`;
}

function renderLicenseFile(license) {
  // <details><summary><b>View License</b></summary>${renderLicenseFile(license)}</details></br>

  if (isNode()) {
    let text = fs.readFileSync(`./utils/licenses/${license}`, 'utf8');
    return `<details><summary><b>View License</b></summary>${text}</details></br>`
  } else {
    // Load the license file from local host
    const url = `utils/licenses/${license}`;
    // Get url using XMLHttpRequest
    var request = new XMLHttpRequest();
    request.open('GET', url, false);
    // Send request
    request.send(null);
    if (request.status === 200) {
      return `<details><summary><b>View License</b></summary>${request.responseText}</details></br>`
    }
    return "";
  }
}

function renderQuestionsSection(questions, github, email) {
  return `## ❓Questions   
<p>${questions}</p>
You can contact me with the information below:   

* [${renderBadge('github:', github, 'black')}](https://github.com/${github})    
* [![email](https://img.shields.io/badge/email:-${email}-blue.svg)](mailto:${email})    
    `;
}


// function generateMarkdown({ title, description, installation, usage, license, contributing, tests, questions, programming_languages, website, github, email }) {
function generateMarkdown(data) {
  let { title, description, installation, usage, license, contributing, tests, questions, programming_languages, website, github, email } = data;
  let markdown = `# ${title}    
${renderLicenseBadge(license)}

## Description   
<p>${description}</p>   

## Table of contents
${renderTableOfContents(title, description, installation, usage, license, contributing, tests, questions, website, programming_languages)}
${renderSection('🛠️Installation', installation)}
${renderSection('💻Usage', usage)}
${renderLicenseSection(license)}
${renderSection('🤝Contributing', contributing)}
${renderSection('📃Tests', tests)}
${renderQuestionsSection(questions, github, email)}    
${renderSection('🌐Website', 'Please visit:')}   

[${website}](${website})  

${renderSection('👨‍💻Programming Languages', 'This project was created with: ' + programming_languages.join("/"))}
`;
  return markdown;
}

// Add fuction to convert markdown to html
function convertMarkdownToHtml(markdown) {
  var converter = new showdown.Converter();
  var html = converter.makeHtml(markdown);
  return html;
}

if (isNode()) {
  module.exports = { generateMarkdown };
}