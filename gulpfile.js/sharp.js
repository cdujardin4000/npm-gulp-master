const fs = require("fs");
const sharp = require('sharp');
const path = require("path");
const sharpStream = sharp({ failOn: 'none' });

const promises = [];
const SIZES_FULL = [3840, 1920, 1200, 720];
const SIZES_THUMBS = [880, 440, 330]
const FORMATS = ['avif', 'webp'];
const QUALITY = 80;

// increase listener
require('events').EventEmitter.defaultMaxListeners = 25;


let source = 'files/house/IMG_0571.JPG';
let fileExtension = path.extname(source).substring(1).toLowerCase();

optimize(source);

function optimize(file) {
    let fileExtension = path.extname(file).substring(1).toLowerCase();
    if(['zip', 'jpg', 'jpeg', 'png'].includes(fileExtension))
    {
        optimizeType(source, SIZES_FULL, 'full');
        optimizeType(source, SIZES_THUMBS, 'thumb');

        // https://github.com/sindresorhus/got/blob/main/documentation/3-streams.md
        fs.createReadStream(source).pipe(sharpStream);

        Promise.all(promises)
            .then(res => { console.log("Done!", res); })
            .catch(err => {
                console.error("Error processing files, let's clean it up", err);
                try {
                    /*fs.unlinkSync("originalFile.jpg");
                    fs.unlinkSync("optimized-500.jpg");
                    fs.unlinkSync("optimized-500.webp");*/
                } catch (e) {}
            });
    }
}

function optimizeType(file, sizes, type) {
    sizes.forEach(size => {

        let directory = `test/${type}/`;
        let directoryFull = `${directory}/${size}/`;

        if (!fs.existsSync(directory)) {
            fs.mkdirSync(directory);
        }

        if (!fs.existsSync(directoryFull)) {
            fs.mkdirSync(directoryFull);
        }

        let resizeInfo = (type === 'thumb') ? { width: size, height: size } : { width: size };

        if(fileExtension === 'png') {
            promises.push(
                sharpStream
                    .clone()
                    .resize(resizeInfo)
                    .png({ quality: QUALITY })
                    .toFile(`${directoryFull}optimized.png`)
            );
        }
        else
        {
            promises.push(
                sharpStream
                    .clone()
                    .resize(resizeInfo)
                    .jpeg({ quality: QUALITY, mozjpeg: true })
                    .toFile(`${directoryFull}optimized.jpg`)
            );
        }

        if(FORMATS.includes('webp'))
        {
            promises.push(
                sharpStream
                    .clone()
                    .resize(resizeInfo)
                    .webp({ quality: QUALITY })
                    .toFile(`${directoryFull}optimized.webp`)
            );
        }

        if(FORMATS.includes('avif'))
        {
            promises.push(
                sharpStream
                    .clone()
                    .resize(resizeInfo)
                    .avif({ quality: QUALITY })
                    .toFile(`${directoryFull}optimized.avif`)
            );
        }
    })
}