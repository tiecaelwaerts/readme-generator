// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }
  return `![License](https://img.shields.io/badge/license-${license}-blue.svg)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return '';
  }
  return `This application uses the ${license} license. For more information, visit [here](https://choosealicense.com/licenses/${license.toLowerCase()}).`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  }
  return `## License 
    ${license}`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return ` # ${data.title}
  # Table of Contents
  1. [Description](#description)
  2. [Installation](#installation)
  3. [Usage](#usage)
  4. [Collaborators](#collaborators)
  5. [License](#license)
  6. [Features](#features)
  7. [Contribution](#contribution)
  8. [Contact](#contact)
  

  ## Description
${data.description}

## Installation 
${data.installation}

## Usage
${data.usage}

## Collaborators 
${data.collaborators}

${renderLicenseSection(data.license)}
${renderLicenseBadge(data.license)}
${renderLicenseLink(data.license)}

## Features
${data.features}

## Contribution
${data.contribution}

## Contact
GitHub: [${data.github}](https://github.com/${data.github})
Email: ${data.email}
`;
}

export default generateMarkdown;
