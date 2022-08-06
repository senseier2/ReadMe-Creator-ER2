// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
//const questions = [];
inquirer
  .prompt([
    {
      type: 'input',
      message: 'describe your project:',
      name: 'description',
    },
    {
      type: 'input',
      message: 'License information',
      name: 'license',

    },
    {
      type: 'confirm',
      message: 'Would you like to add an installation description',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'Usage:',
      name: 'usage',
    },
    {
      type: 'input',
      message: 'Enter your GitHub Address:',
      name: 'github',
    },
    {
      type: 'input',
      message: 'enter your email address:',
      name: 'email',
    },
    {
     type: 'input',
     message: 'description:',
     name: 'Name',
    },

  ])

// TODO: Create a function to write README file
//function writeToFile(fileName, data) {
//}
.then((data) => {

    const readmeTemp = ({
        title,
        description,
        installation,
        usage,
        license,
        contributors, 
        testInstructions
        gitHub,
        email,

    }) =>
    

    `

    ## Description
    ${description}

    ## Table of contents

    ## Installation
    ## Usage
    ## License
    ## Contributing
    ## Test

    `


    const filename = `${data.Name.toLowerCase().split(' ').join('')}.md`;

    fs.writeFile(filename, JSON.stringify(readmeTemp, null, '\t'), (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });

//TODO: Create a function to append section titles to Readme




// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
