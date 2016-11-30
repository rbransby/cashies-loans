const config =            require('../config');

module.exports = (gulp, $) => {
  return () => {
    return gulp.src(`${config.paths.images}/**/*`)
      .pipe($.cache($.imagemin()))
      .pipe(gulp.dest(`${config.paths.dist}/images`));
  };
};
