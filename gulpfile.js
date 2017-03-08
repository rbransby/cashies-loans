//Gulp tools
const gulp =              require('gulp');
const gulpLoadPlugins =   require('gulp-load-plugins');
const del =               require('del');
const runSequence =       require('run-sequence');
const config =            require('./config');
const $ =                 gulpLoadPlugins();

//Task bases
const scriptsTask =       require('./gulp/scripts');
const stylesTask =        require('./gulp/styles');
const lintTask =          require('./gulp/lintScripts');
const lintStylesTask =    require('./gulp/lintStyles');
const imagesTask =        require('./gulp/images');
const iconsTask =         require('./gulp/icons');
const paniniTask =        require('./gulp/panini');
const extrasTask =        require('./gulp/extras');
const serveTask =         require('./gulp/serve');

//Task definitions
gulp.task('lintScripts', lintTask(gulp, $));

gulp.task('lintStyles', lintStylesTask(gulp, $));

gulp.task('images', imagesTask(gulp, $));

gulp.task('panini', paniniTask(gulp));

gulp.task('extras', extrasTask(gulp));

gulp.task('styles:dev', stylesTask(gulp, $, { config: config.sass.dev, reload: true }));

gulp.task('styles:prod', stylesTask(gulp, $, { config: config.sass.prod, reload: true }));

gulp.task('scripts:dev', scriptsTask(gulp, $, { config: config.webpack.dev, reload: true }));

gulp.task('scripts:prod', scriptsTask(gulp, $, { config: config.webpack.prod, reload: true }));

gulp.task('serve:dev', serveTask(gulp, { env: 'dev' }));

gulp.task('serve:prod', serveTask(gulp, { env: 'prod' }));

gulp.task('clean', del.bind(null, [config.paths.dist]));

gulp.task('icons', iconsTask(gulp, $)); // only run if we added new icons

gulp.task('clearCache',() => $.cache.clearAll());

gulp.task('build', ['lintStyles', 'lintScripts', 'images', 'styles:prod', 'scripts:prod', 'panini', 'extras'], () => {
  return gulp.src(`${config.paths.dist}/**/*`).pipe($.size({gzip: true}));
});

gulp.task('serve', () => { runSequence(['clean'], ['serve:dev']); });

gulp.task('default', () => { runSequence(['clean'], ['build']); });
