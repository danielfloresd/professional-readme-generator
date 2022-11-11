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
    var readme = generateReadmeHTML(data);
    // Print hello world

});


// Function to generate README.md
function generateReadmeHTML(data) {
    // Create README.md file
    // Add input to data map
    // Create README.md file
console.log(data);
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