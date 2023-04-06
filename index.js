//import 'fs' and 'inquirer' methods
const fs = require('fs');
const inquirer = require('inquirer');
//import custom methods
const shapes = require('./lib/shapes')
const generateSvg = require('./lib/generateSvg')
const svgColors = require('./lib/svgColors')
const {lengthVerify, colorVerify, hexVerify} = require('./lib/verification')

//list of questions asked by inquirer
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

//function to display questions
inquirer.prompt(questions)
    .then(function (response) {
        //call test scripts
        lengthVerify(response)
        hexVerify(response)
        colorVerify(response)
        //TODO: create generateSvg Script to replace 'generateSvg'
        //generate file using generateSVG as content
        //TODO: make sure this outputs some kind of SVG file, even if it isnt filled in compeletley before class @ 6PM CST
        
        fs.writeFile(`logo.svg`, 'generateSvg', (err) =>
            err ? console.log(err) : console.log('Generated logo.svg'))
    });

