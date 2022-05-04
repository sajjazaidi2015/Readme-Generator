// TODO: Include packages needed for this application
"use strict";
const inquirer = require("inquirer");
const fs = require('fs');

const liceses = {
    'MIT': '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    'GNU AGPLv3': '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)',
    'GNU GPLv3' : '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
    'GNU LGPLv3' : '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)',
    'Mozilla Public License 2.0' : '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)', 
    'Apache License 2.0' : '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)', 
    'Boost Software License 1.0' : '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)',
    'The Unlicense' : '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)'
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
  choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
  },
];

// TODO: Create a function to write README file
function writeToFile(questions, answers) {
  const data = `
  # ${answers.project_title}
  ## ${answers.project_description}
  # Licencse
  ${liceses[answers.licences]}
  `
  
  
      fs.writeFile('README.md', data, (err) =>
          err ? console.log(err) : console.log('Success!')
      );
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    console.log(JSON.stringify(answers, null, "  "));

    writeToFile(questions, answers)
  });
}

// Function call to initialize app
init();
