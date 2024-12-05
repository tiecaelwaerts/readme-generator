// TODO: Include packages needed for this application
import inquirer from 'inquirer';

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
        type: 'input',
        name: 'license',
        message: 'What license does your application use?'
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

inquirer.prompt(questions).then(answers => {
    console.log(answers)
});

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
