const svgColors = require('./svgColors')

function lengthVerify(response) {
    let shapeText = response.shapeText

    console.log(shapeText.length);
    if (shapeText.length <= 3) {
        return;
    } else {
        console.error("Text must be 3 letters long")
    };
};


function hexVerify(response) {
    let hexCode = response.shapecolor
    let hexCodeLength = hexCode.length

    console.log(hexCodeLength)
    if (hexCode[0] == '#' && hexCodeLength <= '7') {

    } else {
        colorVerify(response)
    }
}


//TODO: look up best array method to do this oh my god someoen help me recursivly do this ahhhhhh
function colorVerify(response) {
    let color = response.shapecolor
    let colorArray = svgColors

    colorArray.forEach(element => {
        let arrayLength = svgColors.length
        if (color !== color[arrayLength]){
            color.pop();

        }else{

        };
    });
}

hexVerify();

module.exports = {
    lengthVerify,
    hexVerify,
    colorVerify
}