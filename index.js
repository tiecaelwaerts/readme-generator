// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './generateMarkdown.js';

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is a brief description of your project?'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps needed to install?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How would you use this application?'
    },
    {
        type: 'input',
        name: 'collaborators',
        message: 'Did anyone or anything help make this application?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license does your application use?',
        choices: ['MIT', 'Apache', 'GPL', '']
    },
    {
        type: 'input',
        name: 'features',
        message: 'What are the features of your application?'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'What are the contribution guidelines?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },
];


// TODO: Create a function to write README file
function writeReadMe(data) {
    const content = generateMarkdown(data);
    
    fs.writeFile('README.md', content, (err) => {
        if (err) {
            console.error('Error writing README file:', err);
        } else {
            console.log('README has been created successfully!');
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        writeReadMe(answers);
    });
}

// Function call to initialize app
init();
