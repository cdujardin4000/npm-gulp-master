const config = require("./config")();
module.exports = {
    config: config
}

const { src, dest, task} = require('gulp');
const zipper = require('gulp-zip');
const ZIP_SRC =  './build';//config.archive.from;
const ZIP_DEST= './zip';//config.archive.to;



function zipFolder(source, destination) {
    return src(source)
        .pipe(zipper(`${source} ${config.project}`)
        .pipe(dest(destination)))
}

task(zipFolder);

zipFolder.description = 'Zip as param passed folder to zip folder';
zipFolder.exports = zipFolder;
zipFolder(ZIP_SRC, ZIP_DEST);