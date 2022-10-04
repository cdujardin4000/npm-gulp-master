'use strict'
//TASKS

const  js  = require("./js");
js.exports = js;
const  css  = require("./css");
css.exports = css;

//NODE-MODULES
const {  task } = require('gulp');


async function build() {
    build.description = 'Optimise css, js, fonts, img and html for production builds';
    console.log(build.description);
    console.log('build-start');
    console.log('js-start');
    await js;
    console.log('js-end');
    console.log('css-start');
    await css;
    console.log('css-end');
    console.log('build-end');
}




task(build);
build.exports = build;

