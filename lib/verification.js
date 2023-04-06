const svgColors = require('./svgColors')

let colorArray = svgColors

function lengthVerify(response) {
    let shapeText = response.shapeText

    //verifys 3 or less letters are input into logo
    console.log(shapeText.length);
    if (shapeText.length <= 3) {
        return;
    } else {
        console.error("Text must be 3 letters long")
    };
};


function hexVerify(response) {

    // let hexCode = response.shapecolor

    hexCode = '#123456'
    let hexCodeLength = hexCode.length

    //verifies that input fits hexcode format and length
    console.log(hexCodeLength)
    //TODO: include into test if it contains carachters that arent 0-9 && a-f
    if (hexCode[0] == '#' && hexCodeLength >= '7') {
        console.log()
    } else {
        colorVerify("yellow");
        return;
    }
}

function arrayRecurse(color) { 

    if(svgColors.includes(color)){
        return true;
    }else{
        return false;
    }
    
};

//TODO: look up best array method to do this oh my god someoen help me recursivly do this ahhhhhh
function colorVerify(response) {
    let color = response.shapecolor

    arrayRecurse(color)
};

hexVerify();

module.exports = {
    lengthVerify,
    hexVerify,
    colorVerify,
}