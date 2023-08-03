// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const renderLicenseBadge = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title"
    },
    {
        type: "input",
        message: "Write a description about your project.",
        name: "description"
    },
    {
        type: "input",
        message: "What is the first item in your Table Of Contents.",
        name: "toc1"
    },
    {
        type: "input",
        message: "What is the second item in your Table Of Contents.",
        name: "toc2"
    },
    {
        type: "input",
        message: "What is the third item in your Table Of Contents.",
        name: "toc3"
    },
    {
        type: "input",
        message: "What is the fourth item in your Table Of Contents.",
        name: "toc4"
    },
    {
        type: "input",
        message: "What is the fifth item in your Table Of Contents.",
        name: "toc5"
    },
    {
        type: "input",
        message: "What is the sixth item in your Table Of Contents.",
        name: "toc6"
    },
    {
        type: "input",
        message: "What is the seventh item in your Table Of Contents.",
        name: "toc7"
    },
    {
        type: "input",
        message: "What is the eighth item in your Table Of Contents.",
        name: "toc8"
    },
    {
        type: "input",
        message: "What is the ninth item in your Table Of Contents.",
        name: "toc9"
    },
    {
        type: "input",
        message: "What is your application used for?",
        name: "usage"
    },
    {
        type: "list",
        message: "Pick a license for your project",
        choices: ["MIT", "ISC", "IBM"],
        name: "license"
    },
    {
        type: "input",
        message: "How can someone contribute to your project?",
        name: "contribution"
    },
    {
        type: "input",
        message: "Describe the tests you ran on your project.",
        name: "tests"
    },
    {
        type: "input",
        message: "What is your GitHub Username?",
        name: "questions"
    },
    {
        type: "input",
        message: "What is your email?",
        name: "email"
    },
    {
        type: "input",
        message: "How do you install your app?",
        name: "instillation"
    }
];

inquirer
    .prompt(questions)
    .then((answers) => {
        const markdown = getMarkdown(answers);
        fs.writeFile('README.md', markdown, (err) => {
            if (err) {
                console.error(err);
            } else {
                console.log("Write file success!");
            }
        });
    });

const getMarkdown = (answers) => {
    const { title, description, toc1, toc2, toc3, toc4, toc5, toc6, toc7, toc8, toc9, instillation, usage, license, licenseBadge, contribution, tests, email, questions } = answers;

//     return `
// # ${title}

// ## ${licenseBadge}

// ## Description
//     ${description}

// ## Table of Contents
//    1. ${toc1}
//    2. ${toc2}
//    3. ${toc3}
//    4. ${toc4}
//    5. ${toc5}
//    6. ${toc6}
//    7. ${toc7}
//    8. ${toc8}
//    9. ${toc9}

// ## Instillation
//     ${instillation}

// ## Usage
//     ${usage}

// ## License
//     ${license}

// ## Contributtion
//     ${contribution}

// ## Tests
//     ${tests}

// ## Questions
//     ${questions}
//     ${email}  
// `;
}

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
