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
        // .then(async({ username }) => {
        //     try {
        //         const gitUser = api.getUser(username);
        //         console.log(gitUser);
        //     } catch (e) {
        //         console.log(e);
        //     }
        // })
        .then(function(response) {
            console.log(response);
            try {
                const readmeData = generateMarkdown(response);
                writeToFile('./README.md', readmeData);
            } catch (e) {
                console.log(e);
            }
        })
};

init();





// The generated README includes a bio image from the user's GitHub profile.


// The generated README includes the user's email.


// The generated README includes the following sections:

// Title
// Description
// Table of Contents
// Installation
// Usage
// License
// Contributing
// Tests
// Questions



// The generated README includes 1 badge that's specific to the repository.