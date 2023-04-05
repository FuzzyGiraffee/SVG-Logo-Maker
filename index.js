const fs = require('fs');
const inquirer = require('inquirer');

//TODO: fix reference lnks
const shapes = require('./lib/shapes')
const generateSvg = require('./lib/generateSvg')

const questions = [
    {
        //TODO: validate that only 3 letters are input, possibly in a ./lib script
        type: 'input',
        name: 'shapeText',
        message: 'Input up to 3 characters that will display inside of your logo',
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
];

function lengthVerify(response) {
    let shapeText = response.shapeText

    console.log(shapeText.length);
    if (shapeText.length <= 3) {
        return;
    } else {
        console.error("Text must be 3 letters long")
    };
};

inquirer.prompt(questions)
    .then(function (response) {
        lengthVerify(response)

        fs.writeFile(`logo.svg`, 'generateSvg', (err) =>
            err ? console.log(err) : console.log('Success!'))
    });
