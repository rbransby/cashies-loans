const config =            require('../config');
const imageminMozjpeg =   require('imagemin-mozjpeg');
const imageminGifsicle =  require('imagemin-gifsicle');
const imageminPngquant =  require('imagemin-pngquant');

module.exports = (gulp, $) => {
  return () => {
    return gulp.src(`${config.paths.images}/**/*`)
      .pipe($.imagemin([
        imageminMozjpeg({ quality:80 }),
        imageminGifsicle({ optimizationLevel: 3 }),
        imageminPngquant({ quality: 80 })],
        {verbose: true}))
      .pipe(gulp.dest(`${config.paths.dist}/images`));
  };
};
