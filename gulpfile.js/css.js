'use strict'
const config = require("./config")();
module.exports = {
    config: config
}

const { src, dest, task } = require("gulp");
const sourcemaps = require("gulp-sourcemaps");
const csso = require("gulp-csso");

function css() {
    console.log(`${css.description}`)
    return src(config.sources.css)
        .pipe(sourcemaps.init())
        .pipe(csso())
        .pipe(sourcemaps.write())
        .pipe(dest(config.destinations.css))
}

task(css);

css.description = 'optimise CSS files for production use';
css.exports = css;