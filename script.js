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
    // var programming_lang = $("#project-programming-lang").val();
    // Get value for project contributing
    var contributing = $("#project-contributing").val();
    // Get value for project tests
    var tests = $("#project-tests").val();
    // Get value for project questions
    var questions = $("#project-questions").val();
    // Get value for project username
    var github = $("#project-username").val();
    // Get value for project email
    var email = $("#project-email").val();
 
    // Get value for project linkedin
    var website = $("#project-website").val();
    // Generate README.md

    // Get value for project programming languages checkboxes
    var programming_lang = [];
    $.each($("input[name='programming_lang']:checked"), function () {
        programming_lang.push($(this).val());
    });

    var data = {
        title: title,
        description: description,
        installation: installation,
        usage: usage,
        license: license,
        programming_languages: programming_lang,
        contributing: contributing,
        tests: tests,
        questions: questions,
        email: email,
        github: github,
    };
    // Check that all fields are filled out
    if (title === "" || description === "" || installation === "" || usage === "" || license === "" || contributing === "" || tests === "" || questions === "" || username === "" || email === "" || github === "" || website === "") {
        // Make a list of the missing fields
        var missingFields = [];
        console.log("data", data);
    //  Iterate through the data object and check if the value is empty
        for (var key in data) {
            if (data[key] === "") {
                missingFields.push(key);
            }
        }

        alert("Please fill out all fields: " + missingFields.join(", "));
    } else {
        var readme = generateReadmeHTML(data);
    }
});


// Function to generate README.md
function generateReadmeHTML(data) {
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