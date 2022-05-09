function render(project_title) {
  if (project_title) {
    return `
# Project Title 
${project_title}`
  }
}

function renderProjectDescription(project_description) {
  if (project_description) {
    return  `
# Project Description 
${project_description}`
  }  else {
    return '';
  }
}

function renderInstallation(installation) {
  if (installation) {return  `
# Installation
To install necessary dependencies, run the following command:
\`\`\` 
${installation}
\`\`\`
`} else {
    return '';
  }
}

function renderUsage(usage) {
  if (usage) {return  `
# Usage
${usage}`
  } else {
    return '';
  }
}

function renderContribution(contribution) {
  if (contribution) {return  `
# Contribution Guidline
${contribution}`
  } else {
    return '';
  }
}

function renderTestInstruction(test_instruction) {
  if (test_instruction) {return  `
# Test Instructions
To run tests, run the following command:
\`\`\` 
${test_instruction}
\`\`\`
`
  } else {
    return '';
  }
}


function renderQuestion(username, email) {
  if (username, email) {return  `
# Question
If you have any questions about the repo, open an issue or contact me directly at ${email}. You can find more of my work at ${username}.
`
  }
}


// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
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
function renderLicenseBadge(licences) {
  if(!licences) {return ''};
  {return  `
# Licencse
This project is licensed under <br/> ${liceses[licences]}`
}
  
}

function renderTableOfContent(data) {
  const listOfTableOfContent = [];
  if(data.installation) {
    listOfTableOfContent.push('Installation')
  }
  if(data.usage) {
    listOfTableOfContent.push('Usage')
  }
  if(data.contribution) {
    listOfTableOfContent.push('Contribution')
  }
  if(data.test_instruction) {
    listOfTableOfContent.push('Test Instruction')
  }
  if(data.licences) {
    listOfTableOfContent.push('Licences')
  }

  function generateList() {
    return listOfTableOfContent.reduce((acc, curr, index) => {
      acc = acc + `\n ${index + 1}. ${curr}`;
      return acc;
    }, ``)
  }

  return `# Table of Content
  ${generateList()}
  `

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `${render(data.project_title)}
${renderProjectDescription(data.project_description)}
${renderTableOfContent(data)}
${renderInstallation(data.installation)}
${renderUsage(data.usage)}
${renderContribution(data.contribution)} 
${renderTestInstruction(data.test_instruction)}
${renderLicenseBadge(data.licences)}
${renderQuestion(data.username, data.email)}

`;
}

module.exports = generateMarkdown;
