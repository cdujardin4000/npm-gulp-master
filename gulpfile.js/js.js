'use strict'
const {src, dest, task} = require("gulp");
const concat = require("gulp-concat");
const gulpUglify = require("gulp-uglify");
const javascriptObfuscator = require("gulp-javascript-obfuscator");
const config = require("./config")();
module.exports = {
    config: config
}

function js() {
    js.description = 'optimise JS files for production use';
    return src(config.sources.js)
        .pipe(concat('main.js'))
        .pipe(gulpUglify({
            mangle: {
                toplevel: true
            }
        }))
        .pipe(javascriptObfuscator())
        .pipe(gulpUglify())
        .pipe(dest(config.destinations.js))
}

task(js);
js.exports = js;