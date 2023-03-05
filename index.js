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
        choices: ["ISC", "MIT", "None"],
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
// .then((response) =>
//     response.confirm === response.password
//     ? console.log('Sucess!')
//     : console.log('You forgot your password already!?')
// );

.then((data) => {
    fs.writeFile("./GenREADME.md", READMEgenerate(data), (err) =>
        err ? console.error(err) : console.log("HOORAY! A new README has been generated!")
)});

function READMEgenerate(data) {
    return `

# ${data.title}

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
    ${data.instruction}

## Usage
    ${data.usage}

## Credits
    ${data.credits}

## Test
    ${data.test}
    
## Questions
    -Github username: ${data.github} \n
    -Email: ${data.email}

    `
}
    
