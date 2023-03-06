// need to define const fs and inquirer //

const fs= require('fs');
const inquirer = require('inquirer');

// follow Instruction setup in day 2 activity #19 //
// prompt needs to include title, description, installation, usage, contribution, test , license, credits, email, github username //
// refer to http://adilapapaya.com/docs/inquirer/#promptstype for prompt types //
inquirer
.prompt([
    {
        type: 'input',
        message: 'What is your name?',
        name: 'firstname',
    },
    {
        type: 'input',
        message: 'What year are you currently in?',
        name: 'year',
    },
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'What is the description of your project?',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What are the installation instructions for your project?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'What is the usage information for your project?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'What are the contribution guidelines of your project?',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'What are the test instructions for your project?',
        name: 'test',
    },
    {
        type: 'list',
        message: 'Which license do you want to use?',
        choices: ["ISC License", "MIT License", "None"],
        name: 'license',
    },
    {
        type: 'input',
        message: 'what are the credits for your project?',
        name: 'credits',
    },
    {
        type: 'input',
            message: 'What is the username of your Github?',
            name: 'github',
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email',
    },  
])


.then((data) => {
    fs.writeFile("./GenREADME.md", READMEgenerate(data), (err) =>
        err ? console.error(err) : console.log("HOORAY! A new README has been generated!")
)});

function READMEgenerate(data) {
    return `

# ${data.title}

[![license](https://img.shields.io/github/license/DAVFoundation/captain-n3m0.svg?style=flat-square)](https://github.com/DAVFoundation/captain-n3m0/blob/master/LICENSE)

## Description

${data.description}

## Table of Contents

- [Description](#descsription)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [Test](#test)
- [License](#license)
- [Questions](#questions)

## Installation
    ${data.installation}

## Usage
    ${data.usage}

## Credits
    ${data.credits}

## Test
    ${data.test}

## License
    ${data.license} \n
    Copyright (c) ${data.year} ${data.firstname}

    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
    
## Questions
    -Github username: ${data.github}
    -Github profile: https://github.com/${data.github}
    -Email: ${data.email}

    `
}
    
