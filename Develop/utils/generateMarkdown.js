function render(project_title) {
  if (project_title) {
    return `# Project Title ${project_title}`
  }
}

function renderProjectDescription(project_description) {
  if (project_description) {
    return  `<a name="description"></a>
    # Project Description ${project_description}`
  }
}

function renderInstallation(installation) {
  if (installation) return  `# installation
  ${installation}`
}

function renderUsage(usage) {
  if (usage) return  `# Usage
  ${usage}`
}

function renderContribution(contribution) {
  if (contribution) return  `# Contribution Guidline
  ${contribution}`
}

function renderTestInstruction(test_instruction) {
  if (test_instruction) return  `# test_instruction 
  ${test_instruction}`
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
function renderLicenseBadge(license) {
  if(!license) return '';
  return  `# Licencse
  ${liceses[license]}`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

function renderTableOfContent(data) {
  const listOfTableOfContent = [];
  if(data.project_description) {
    listOfTableOfContent.push('Description')
  }
  if(data.license) {
    listOfTableOfContent.push('Licence')
  }
  return `# Table of Content`

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `${render(data.project_title)}
${renderProjectDescription(data.project_description)}
${renderInstallation(data.installation)}
${renderUsage(data.usage)}
${renderContribution(data.contribution)} 
${renderTestInstruction(data.test_instruction)}
${renderLicenseBadge(data.license)}
`;
}

module.exports = generateMarkdown;
