// TODO: Include packages needed for this application
"use strict";
const inquirer = require("inquirer");
const fs = require("fs");
const markdown = require("./utils/generateMarkdown");


// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "project_title",
    message: "What's your Project title",
    validate: function (answer) {
      if (answer.length > 0) {
        return true;
      }
      return "Please Provide a project title";
    },
  },
  {
    type: "input",
    name: "project_description",
    message: "What's your Project description",    
  },
  {
    type: "input",
    name: "installation",
    message: "What's Installation Instruction",
  },
  {
    type: "input",
    name: "usage",
    message: "What's Usage Information",
  },
  {
    type: "input",
    name: "contribution",
    message: "What's Contribution guidliness",
  },
  {
    type: "input",
    name: "test_instruction",
    message: "What's Test Instruction",
  },
  
  {
    type: "list",
    name: "licences",
    message: "What is your publishing licence?",
    choices: [
      "GNU AGPLv3",
      "GNU GPLv3",
      "GNU LGPLv3",
      "Mozilla Public License 2.0",
      "Apache License 2.0",
      "MIT License",
      "Boost Software License 1.0",
      "The Unlicense",
    ]
  }
  ,
  {
    type: 'input',
    message: "What is your GitHub username?",
    name: 'username',
    validate: function (username) {
      if(/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(username)){
        return true;
      }else{
        return 'Please enter a valid URL of GitHub'
      }

    }
  },

  {
    type: 'input',
    message: 'What is your email address?',
    name: 'email',
    validate: function(email)
    {
        if(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email)) {
          return true;
        }
        // Regex mail check (return true if valid mail)
        return 'Please enter a valid email adddress.';
    }
}

  
];

// TODO: Create a function to write README file
function writeToFile(questions, answers) {
  console.log('answer ===>', answers)
  const data = markdown(answers);
fs.writeFile("README.md", data, (err) =>
    err ? console.log(err) : console.log("Success!")
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    console.log(JSON.stringify(answers, null, "  "));

    writeToFile(questions, answers);
  });
}

// Function call to initialize app
init();

/*
Things to do
- Refactor code into small functions
- Each function should have a validation.
- Add validation to the questions

*/
