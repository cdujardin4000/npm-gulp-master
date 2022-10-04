const config = require("./config")();
module.exports = {
    config: config
}

const { src, dest, task } = require('gulp'),
      printing = require('gulp-print').default(),
      gulpif = require('gulp-if'),
      jshint = require('gulp-jshint'),
      jscs = require('gulp-jscs'),
      util = require('gulp-util'),
      args = require('yargs').default;



function lint() {
    util.log(util.colors.blue()) ;
    console.log(config.jsAllFiles)
    return src(config.jsAllFiles)
        .pipe(gulpif(args.verbose, printing)
        .pipe(jshint())
        .pipe(jshint.reporter(
            'jshint-stylish',
            { verbose: true }
        ))
        .pipe(jshint.reporter(
            'fail',
            { verbose: true }
        )))
        //.pipe(dest(config.jsAllFiles));
}

task(lint);

lint.description = 'lint your js files with reporter';
lint.exports = lint;