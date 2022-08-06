// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
//const questions = [];
inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your user name?',
      name: 'Name',
    },
    {
      type: 'input',
      message: 'Where do you live',
      name: 'location',
    },
    {
      type: 'input',
      message: 'Enter your GitHub',
      name: 'github',
    },
    {
        type: 'checkbox',
        message: 'What languages do you know?',
        choice: ["HTML", "JavaScript","CSS","MongoDB"]
        name: 'languages',
    },

  ])

// TODO: Create a function to write README file
//function writeToFile(fileName, data) {
//}
.then((response) => {

    //const htmlPage = `<html><body>${response.name}</body></html>`

    fs.writeFile('index.html', JSON.stringify(response), (err) =>
    err ? console.error(err) : console.log('Success!')
    )}
);

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
