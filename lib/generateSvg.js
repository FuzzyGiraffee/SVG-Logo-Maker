//TODO: prioritize filling in svg file


function generateSvg(data) {
    `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">

    < ${data.shape}fill="${data.shapeColor}"/>
  
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.shapeTextColor}">${data.shapeText}</text>
  
  </svg>`
}

module.exports = generateSvg