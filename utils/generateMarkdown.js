// function that returns a license badge based on which license is passed in
function renderLicenseBadge(data) {
  if(data.license === "None") {
    return ""
  } else if(data.license === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  }
}

// function that returns the license link
// If there is no license, returns an empty string
function renderLicenseLink(data) {
  if(data.license === "None") {
    return ""
  } else {
    return data.license
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {}

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${renderLicenseLink(data)}
  ${renderLicenseBadge(data)}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  If you find any bugs or have any questions, feel free to reach out to me through GitHub or email.
  ${data.questions1}
  ${data.questions2}
`;
}
// TODO: explore option to create hyperlink for github or email response
// TODO: add <br /> where needed to make layout more appealing
// TODO: create tests built into app
module.exports = generateMarkdown;