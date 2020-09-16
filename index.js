const inquirer = require("inquirer");
const fs = require("fs");
const api = require("./utils/api");
const generateMarkdown = require("./utils/generateMarkdown");

const questions = [{
    type: 'input',
    name: 'username',
    message: 'What is your github username?'
},
{
    type: 'input',
    name: 'email',
    message: 'What is your email address?'
},
{
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?'
},
{
    type: 'input',
    name: 'description',
    message: 'Write a short description of your project.'
},
{    
    type: 'input',
    name: 'installation',
    message: 'Please type the command(s) to install all necessary dependencies.'
},
{
    type: 'input',
    name: 'usage',
    message: 'How do you use it?'
},
{
    type: 'list',
    name: 'license',
    message: 'Which license would you like to use?',
    choices: ['MIT', 'GNU GPLv3', 'ISC', 'Apache License 2.0']
},
{
    type: 'input',
    name: 'contributing',
    message: 'How can people contribute?'
},
{
    type: 'input',
    name: 'tests',
    message: 'Please type the commands for running tests.'
}
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) throw err;
        console.log('Your readme has been generated!');
      });
};

function init() {
    inquirer
        .prompt(questions)
        .then(async function(response) {
            console.log(response);
            try {
                const gitUser = await api.getUser(response.username);
                console.log(gitUser);
                const readmeData = generateMarkdown(response, gitUser);
                writeToFile('./README.md', readmeData);
            } catch (e) {
                console.log(e);
            }
        })
    };

init();