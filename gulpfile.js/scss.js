'use strict'
const config = require("./config")();
module.exports = {
    config: config
}

const { src, dest, } = require('gulp');
const sass = require('gulp-sass')(require('sass'));


function scss() {
    return src(config.sources.scss)
        .pipe(sass(
            {outputStyle: 'compressed'},
            {errorLogToConsole: true}
        ))
        .pipe(dest(config.destinations.scss));
}

module.exports = {
    scss : scss
}