const panini =            require('panini');
const config =            require('../config');

module.exports = (gulp) => {
  return () => {
    panini.refresh();
    return gulp.src(`${config.paths.pages}/**/*.html`)
      .pipe(panini({
        root      : config.paths.pages,
        layouts   : config.paths.layouts,
        partials  : config.paths.partials,
        data      : config.paths.data,
        helpers   : config.paths.helpers,
      }))
      .pipe(gulp.dest(config.paths.dist));
  };
};
