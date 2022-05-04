// TODO: Include packages needed for this application
"use strict";
const inquirer = require("inquirer");
const fs = require('fs');

const liceses = {
    'MIT': '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
}

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "project_title",
    message: "What's your Project title",
  },
  {
    type: "input",
    name: "project_description",
    message: "What's your Project description",
  },
  {
    type: "list",
    name: "licences",
    message: "What is your publishing licence?",
    choices: ["MIT", "Apache 2.0 License", "Boost Software License 1.0"],
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    console.log(JSON.stringify(answers, null, "  "));

    const data = `
# ${answers.project_title}
## ${answers.project_description}
# Licencse
${liceses[answers.licences]}
`


    fs.writeFile('README.md', data, (err) =>
        err ? console.log(err) : console.log('Success!')
    );
  });
}

// Function call to initialize app
init();
