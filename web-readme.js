// const { fileURLToPath } = require("url");
var markdown = "";
$("#generate-readme").on("click", function () {
    // Get value for project title
    var title = $("#project-title").val();
    // Get value for project description
    var description = $("#project-description").val();
    // Get value for project installation
    var installation = $("#project-installation").val();
    // Get value for project usage
    var usage = $("#project-usage").val();
    // Get value for project license
    var license = $("#project-license").val();
    // Get value for project license
    var programming_lang = $("#project-programming-lang").val();
    // Get value for project contributing
    var contributing = $("#project-contributing").val();
    // Get value for project tests
    var tests = $("#project-tests").val();
    // Get value for project questions
    var questions = $("#project-questions").val();
    // Get value for project username
    var username = $("#project-username").val();
    // Get value for project email
    var email = $("#project-email").val();
    // Get value for project image
    var image = $("#project-image").val();
    // Get value for project github
    var github = $("#project-github").val();
    // Get value for project linkedin
    var linkedin = $("#project-linkedin").val();
    // Get value for project twitter
    var twitter = $("#project-twitter").val();
    // Get value for project facebook
    var facebook = $("#project-facebook").val();
    // Get value for project instagram
    var instagram = $("#project-instagram").val();
    // Get value for project youtube
    var youtube = $("#project-youtube").val();
    // Get value for project website
    var website = $("#project-website").val();
    // Generate README.md
    var data = {
        title: title,
        description: description,
        installation: installation,
        usage: usage,
        license: license,
        programming_lang: programming_lang,
        contributing: contributing,
        tests: tests,
        questions: questions,
        username: username,
        email: email,
        image: image,
        github: github,
        linkedin: linkedin,
        twitter: twitter,
        facebook: facebook,
        instagram: instagram,
        youtube: youtube,
        website: website
    };
    var readme = generateReadme(data);
});

// Convert licence name to the license badge
function renderBadge(type,name,color) {
    if (!name)
        return "";

    let aType = type || 'badge';
    let aName = name || '';
    let aColor = color || 'black';
     return `![GitHub ${type}](https://img.shields.io/badge/${aType}-${aName}-${aColor}.svg)`;
}
// https://badgen.net/badge/:subject/:status/:color?icon=github
function renderBadgeAlt(type,name,color) {
    if (name !== "None") {
        return `![badge-${type}](https://badgen.net/badge/${type}/${name}/${color})`;
    }
    return "";
}

function renderSection(section,icon,content) {
    if (content) {
        return `## ${icon} ${section}
${content}
`;
    }
    return "";
}

function renderTableOfContents(data) {
    let tableOfContents = "";
    if (data.description) {
        tableOfContents += `* [Description](#description)
`;

    }
    if (data.installation) {
        tableOfContents += `* [Installation](#installation)
`;
    }
    if (data.usage) {
        tableOfContents += `* [Usage](#usage)
`;
    }
    if (data.license) {
        tableOfContents += `* [License](#license)
`;
    }
    if (data.contributing) {
        tableOfContents += `* [Contributing](#contributing)
`;
    }
    if (data.tests) {
        tableOfContents += `* [Tests](#tests)
`;
    }
    if (data.questions) {
        tableOfContents += `* [Questions](#questions)
`;
    }
    if (data.username) {
        tableOfContents += `* [Contact](#contact)
`;
    }
    if (data.image) {
        tableOfContents += `* [Image](#image)
`;
    }
    if (data.github) {
        tableOfContents += `* [GitHub](#github)
`;
    }
    if (data.linkedin) {
        tableOfContents += `* [LinkedIn](#linkedin)
`;
    }   
    if (data.twitter) {
        tableOfContents += `* [Twitter](#twitter)
`;  
    }
    if (data.facebook) {
        tableOfContents += `* [Facebook](#facebook) 
`;      
    }
    if (data.instagram) {
        tableOfContents += `* [Instagram](#instagram)
`;
    }
    if (data.youtube) {
        tableOfContents += `* [YouTube](#youtube)
`;      
    }
    if (data.website) {
        tableOfContents += `* [Website](#website)
`;
    }   
    return tableOfContents;
}


// Function to generate README.md
function generateReadme(data) {
    // Create README.md file
    // Add input to data map
    // Create README.md file

    markdown = generateMarkdown(data);
    var html = convertMarkdownToHtml(markdown);
    console.log(html);

    $("#markdown-preview").text(markdown);
    $("#html-preview").html(html);

    $("#preview-modal").modal("show");
}


$("#download-readme").on("click", function () {
    // Add download markdown as a file
    var element = document.createElement("a");
    element.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(markdown));
    element.setAttribute("download", "README.md");
    element.style.display = "none";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
});


// Add fuction to convert markdown to html
function convertMarkdownToHtml(markdown) {
    var converter = new showdown.Converter();
    var html = converter.makeHtml(markdown);
    return html;
}

function generateMarkdown(data) {
    return `# ${data.title}
## Description
${data.description}

## Table of contents
${renderTableOfContents(data)}

${renderSection('Installation','🛠️',data.installation)}

${renderSection('Usage','💻',data.usage)}

${renderSection('Website','🌐',data.website)}

${renderSection('Contributing','🤝',data.contributing)}

${renderSection('Tests','📃',data.tests)}

${renderSection('Questions','❓',data.questions)}

${renderBadge('license',data.license,'blue')} ${renderBadge('language',data.programming_lang,'yellow')}

Created by professional-readme-generator ${renderBadge('github',data.username,'green')} ${data.email}
    `
}


    // fs.writeFile("README.md", generateMarkdown(data), function(err) {
    //     if (err) {
    //         throw err;
    //     }
    //     console.log("README.md file generated!");
    // });

// Function to writeToFile