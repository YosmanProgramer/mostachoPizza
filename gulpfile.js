const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass');
/* const autoprefixer = require("gulp-autoprefixer"); */

exports.css = () => {
  return src('./sass/**/*.scss')
    .pipe(sass({ outputStyle: 'expanded' }))
    .pipe(dest('./css'));
};

exports.minificarcss = () => {
  return src('./sass/**/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(dest('./css'));
};

exports.default = () => {
  watch('./sass/**/*.scss', this.css);
};
