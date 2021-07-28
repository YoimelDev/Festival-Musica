const { series, src, dest, watch, parallel } = require('gulp');
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');
const notify = require('gulp-notify');
const webp = require('gulp-webp');

// Funcion que compila SASS
function css() {
    return src('src/scss/app.scss')
        .pipe( sass({
            outputStyle: 'expanded'
        }) )
        .pipe( dest('./build/css') )
}

function minificarcss() {
    return src('src/scss/app.scss')
        .pipe( sass({
            outputStyle: 'compressed'
        }) )
        .pipe( dest('./build/css') )
}

function imagenes() {
    return src('src/img/**/*')
        .pipe( imagemin() )
        .pipe( dest('./build/img') )
        .pipe( notify({message: 'Imagen Minificada'}) );
}

function versionWebp() {
    return src('src/img/**/*')
        .pipe( webp() )
        .pipe( dest('./build/img') )
        .pipe( notify({message: 'Version Webp lista'}) );
}

function watchArchivos() {
    watch('src/scss/**/*.scss', css); // * = carpeta actual - ** = todos los archivos con esa extension
}

exports.css = css;
exports.minificarcss = minificarcss;
exports.imagenes = imagenes;
exports.watchArchivos = watchArchivos;

exports.default = series( css, imagenes, versionWebp, watchArchivos );