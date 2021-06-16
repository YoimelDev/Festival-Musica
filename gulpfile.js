const { series, src, dest } = require('gulp');
const sass = require('gulp-sass');

// Funcion que compila SASS
function css() {
    return src('src/scss/app.scss')
        .pipe( sass() )
        .pipe( dest('./build/css') )
}

function minificarCss() {
    return src('src/scss/app.scss')
        .pipe( sass({
            outputStyle: 'compressed'
        }) )
        .pipe( dest('./build/css') )
}

exports.css = css;
exports.minificarCss = minificarCss;