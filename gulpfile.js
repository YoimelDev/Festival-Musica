const { series } = require('gulp');
const sass = require('gulp-sass');

// Funcion que compila SASS
function css( done ) {
    console.log('Compilando SASS');

    done();
}

exports.css = css;