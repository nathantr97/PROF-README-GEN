const inquirer = require('inquirer');
const fs= require('fs');

inquirer
.prompt = ([
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
        message: 'What is the title of your project?',
        name: 'title',
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

.then((data)) => {}
    
