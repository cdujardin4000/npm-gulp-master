'use strict'
const config = require("./config")();
module.exports = {
    config: config
}
const { src, dest, task } = require('gulp');


function copyFonts() {
    copyFonts.description = `copy fonts from ${config.sources.copyFonts} -> ${config.destinations.copyFonts}`;
    console.log(copyFonts.description)
    return src(config.sources.copyFonts)
        .pipe(dest(config.destinations.copyFonts))
}

task(copyFonts);
copyFonts.exports = copyFonts;