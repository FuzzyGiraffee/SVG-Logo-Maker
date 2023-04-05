const fs = require('fs');
const inquirer = require('inquirer');

const shapes = require('./lib/shapes')
const generateSvg = require('./lib/generateSvg')
const svgColors = require('./lib/svgColors')
const {lengthVerify, colorVerify, hexVerify} = require('./lib/verification')

const questions = [
    {
        
        type: 'input',
        name: 'shapeText',
        message: 'Input up to 3 characters that will display inside of your logo',
    },
    {
        //TODO: create verification of default color input
        type: 'input',
        name: 'shapeTextColor',
        message: 'Input the color that you want the shape to be. Please limit it to one of these default colors https://johndecember.com/html/spec/colorsvg.html or hex codes',
    }, {
        type: 'list',
        name: 'shape',
        message: 'Choose the shape of your logo',
        choices: ['circle', 'triangle', 'square']
    }, {
        //TODO: create verification of default color input
        type: 'input',
        name: 'shapeColor',
        message: 'Input the color of your shape. Please limit it to one of these default colors https://johndecember.com/html/spec/colorsvg.html',
    },
];

inquirer.prompt(questions)
    .then(function (response) {
        lengthVerify(response)
        hexVerify(response)

        //TODO: create generateSvg Script to replace 'generateSvg'
        fs.writeFile(`logo.svg`, 'generateSvg', (err) =>
            err ? console.log(err) : console.log('Generated logo.svg'))
    });

