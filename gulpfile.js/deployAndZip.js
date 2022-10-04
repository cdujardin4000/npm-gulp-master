const { deploy } = require("./deploy");
const { zipFolder } = require("./zipFolder");
const { series } = require("gulp");

module.exports = {
    deploy : deploy,
    zipFolder : zipFolder,
    deployAndZip : series(deploy, zipFolder)
}