// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  if(data.license === "None") {
    return ""
  } else if(data.license === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  if(data.license === "None") {
    return ""
  } else {
    return "* [License](#license)"
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Table of Content
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  ${renderLicenseLink(data)}
  * [Contributing](#contributing)
  * [Tests](#tests)

  ## Description
  ${data.description}

  ## Questions
  If you find any bugs, or have any questions about this project, feel free to reach out to me by email: ${data.questions}
`;
}

module.exports = generateMarkdown;
