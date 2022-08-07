// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
//const { json } = require("stream/consumers");

// TODO: Create an array of questions for user input
//const questions = [];
inquirer
  .prompt([
    {
      type: 'input',
      message: 'Please enter the title of your project',
      name: 'title',
    },
    {
      type: 'input',
      message: 'describe your project:',
      name: 'description',
    },
    {
      type: 'checkbox',
      message: 'License information',
      name: 'license',
      choices: ["MIT", "GPLv2", "Apache", "GLPv3", "BSD 3-clause", "Unlicense"],

    },
    {
      type: 'confirm',
      message: 'Would you like to add an installation description',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'How do you use this prroject:',
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
     message: 'Who contributed to your project:',
     name: 'contributors',
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
        testInstructions,
        gitHub,
        email,
        test,

    }) =>
    `
# ${title}

## Description
    ${description}

- - - - -

## Table of Contents

[Installation](#installation)
[Usage](#usage)
[License](#license)
[Contributors](#contributors)
[Test](#test)
[Questions](#questions)

## Description
    ${description}

## Installation
    ${installation}

## Usage
    ${usage}

## License
    This application is  covered under the [${license}] license.

## Contributors
    ${contributors}

## Tests
    ${test}

## Questions
    ${gitHub}
    ${email}

Please feel free to send questions via my GitHub profile:(https://github.com/${gitHub})
Or email me via: ${email}
    `
    // Collecting the data into a readme document varible
    let readmeDoc = readmeTemp(data)
    //formatting the title to be used as the file name (lowercase, remove spaces and combin the characters)
    const filename = `${data.title.toLowerCase().split(' ').join('')}.md`;
    //Writing the file to the filesystem and adding the string template literal
    fs.writeFile(filename, readmeDoc, null, (err) =>
      err ? console.log(err) : console.log('ReadMe generated!')
    );
  });

//TODO: Create a function to append section titles to Readme




// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
