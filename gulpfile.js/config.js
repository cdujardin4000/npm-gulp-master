module.exports = () => {

    return {
        project: 'gulp-master',
        sources: {
            assets: /*source files*/'./src/assets/**/*',
            css: /*source files*/'./dist/css/*.css',
            js: /*source files*/`./dist/js/**/*.js`,
            scss: /*source files*/'./src/sass/**/*.scss',
            copyFonts: /*source files*/'./src/assets/fonts/*.*',

        },
        destinations: {
            assets: /*destination folder*/'dist',
            css: /*destination folder*/'build/css',
            scss: /*destination folder*/'dist/css',
            js: /*destination folder*/'build/js',
            copyFonts: /*destination folder*/'dist/fonts',
        },

        jsAllFiles: [/*source files*/'./src/**/*.js', /* js config files */'./*.js'],
        archive: {
            from: './build',
            to: './zip'
        },
    }
}

