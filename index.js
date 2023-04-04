const fs = require('fs');
const inquirer = require('inquirer');

inquirer
    .prompt([
        {
            //TODO: validate that only 3 letters are input, possibly in a ./lib script
            type: 'input',
            name: 'shapeText',
            message: 'Input 3 characters that will display inside of your logo',
        },
        {
            type: 'input',
            name: 'shapeTextColor',
            message: 'Input the color that you want the shape to be. Please limit it to one of these default colors https://johndecember.com/html/spec/colorsvg.html',
        }, {
            type: 'list',
            name: 'shape',
            message: 'Choose the shape of your logo',
            choices: ['circle', 'triangle', 'square']
        }, {
            type: 'input',
            name: 'shapeColor',
            message: 'Input the color of your shape. Please limit it to one of these default colors https://johndecember.com/html/spec/colorsvg.html',
        },
    ]).then((response)=>
    console.log(response));
