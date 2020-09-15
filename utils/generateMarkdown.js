function generateMarkdown(data) {
  return `
# ${data.title}
![](https://img.shields.io/badge/license-${data.license}-brightgreen)

## Table of Contents

1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [License](#license)
5. [Contributing](#contributing)
6. [Tests](#tests)
7. [Questions](#questions)

## Description

${data.description}

## Installation

To install necessary dependencies, run the following command:

  ${data.installation}

## Usage

${data.usage}

## License

This project is licensed under the ${data.license} license.

## Contributing

${data.contributing}

## Tests

To run tests, run the following command:

  ${data.tests}

## Questions

${data.questions}

`;
}

module.exports = generateMarkdown;
