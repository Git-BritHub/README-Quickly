// function that returns a license badge based on which license is passed in
// Have added some of the more commonly used licenses for badges below
function renderLicenseBadge(data) {
  if(data.license === "None") {
    return ""
  } else if(data.license === "MIT License") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-aqua.svg)](https://opensource.org/licenses/MIT)"
  } else if(data.license === "Apache License 2.0") {
    return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  } else if(data.license === "BSD 3-Clause License") {
    return "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
  } else if(data.license === "GNU GPL v3") {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
  } else if(data.license === "ISC License") {
    return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)"
  } else if(data.license === "The Unlicense") {
    return "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"
  }
}

// function that returns the license link
// If there is no license, returns an empty string
function renderLicenseLink(data) {
  if(data.license === "None") {
    return ""
  } else {
    return `* [License](#license)`
  }
}

// Create a function that returns the license section of README
// If there is no license, returns an empty string
function renderLicenseSection(data) {
  if(data.license === "None") {
    return ""
  } else {
    return `## License
  ${renderLicenseBadge(data)}`
  }
}

// function to generate markdown for README
function generateMarkdown(data) {
return `# ${data.title}

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
${renderLicenseLink(data)}
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

${renderLicenseSection(data)}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
If you find any bugs or have any questions, feel free to reach out to me through GitHub at  https://github.com/${data.questions1} or <ahref="mailto:${data.questions2}">Email Here</ahref=>. Thanks and happy coding!
`;
}

module.exports = generateMarkdown;