const { task } = require('gulp');

function deploy(cb){
    console.log('dep')
    cb();
}

task(deploy);

deploy.description = 'Deploy your project using configs in config.js';
deploy.exports = deploy;