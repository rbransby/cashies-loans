const panini =            require('panini');
const browserSync =       require('browser-sync');
const config =            require('../config');

module.exports = (gulp) => {
  return () => {
    console.log('panini running again ****');
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
