'use strict'
const config = require("./config")();
module.exports = {
    config: config
}

const { src, dest, task } = require('gulp');

function assets() {
    assets.description = `copy fonts from ${config.sources.assets} -> ${config.destinations.assets}`;
    console.log(assets.description)
    return src(config.sources.assets)
        .pipe(dest(config.destinations.assets))
}

task(assets);
assets.exports = assets;