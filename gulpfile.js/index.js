// this project structure is based on the gulp4 documentation see: https://gulpjs.com/docs/en/getting-started/javascript-and-gulpfiles

// All the configs for the tasks
const { config } = require("./config");

// require all tasks files in gulpfile.js folder or choose wat you need
// DEV
const { scss } = require("./scss");
const { assets } = require("./assets");



// BUILD AND OPTIMISATION

const { build } = require("./build"),
      { fonts } = require("./copyFonts"),
      { deploy } = require("./deploy"),
      { css } = require("./css"),
      { js } = require("./js"),
      { copyFonts } = require("./copyFonts"),
      { lint } = require("./lint");




// export them
module.exports = {
    css         : css,
    js          : js,
    assets      : assets,
    copyFonts   : copyFonts,
    scss        : scss,
    build       : build,
    fonts       : fonts,
    deploy      : deploy,
    //deployAndZip: deployAndZip,
    config      : config,
    lint        : lint
}


// then keep calm and use them

