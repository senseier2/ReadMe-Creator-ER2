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
      choices: [
        {name:"MIT", value: "MIT"},
        {name:"GPLv2", value: "GPLv2"}, 
        {name:"Apache", value: "Apache"}, 
        {name:"GLPv3", value: "GLPv3"}, 
        {name:"BSD 3-clause", value: "BSD 3-clause"}, 
        {name:"Unlicense", value: "Unlicense"},
        ],

    },
    {
      type: 'input',
      message: 'How do you install your project',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'How do you use this project:',
      name: 'usage',
    },
    {
      type: 'input',
      message: 'Please provide testing instructions',
      name: 'test',
    },
    {
      type: 'input',
      message: 'Enter your GitHub Address:',
      name: 'gitHub',
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
        test,
        gitHub,
        email,

    }) =>
    `
    
${renderLicenseBadge(license)}    

# Project Title: ${title}

## Description
    ${description}

- - - - -

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributors](#contributors)
* [Test](#test)
* [Questions](#questions)

## Description
    ${description}

## Installation
    ${installation}

## Usage
    ${usage}

## License
    This application is  covered under the [${license}]license.

## Contributors
    ${contributors}

## Test Instructions
    ${test}

## Questions

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

// TODO: Creat a function that renders a badge for the licensing
function renderLicenseBadge(license) {
    switch (license) {
      case "MIT":
       return licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
        break;
      case "GPLv2":
         return licenseBadge = "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)";
        break;
      case "Apache":
        return licenseBadge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
        break;
      case "GPLv3":
       return licenseBadge =  "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
        break;
      case "BSD 3-clause":
        return licenseBadge =  "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
        break;
      case "Unlicense":
        return licenseBadge = licenseBadge = "";
    }
    }


// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
