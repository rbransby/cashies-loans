const webpack =           require('webpack');
const webpackStream =     require('webpack-stream');
const browserSync =       require('browser-sync');
const config =            require('../config');
const handleError =       require('./handleError');
const rename =            require("gulp-rename");

module.exports = (gulp, $, options) => {
  return () => {
    return gulp.src(`${config.paths.dist}/storybook/static/*.js`)
      .pipe(rename((path) => {
        path.basename = path.basename.replace(/\..*\./, '.');
      }));
  };
};
