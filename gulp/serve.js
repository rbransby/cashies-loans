'use strict';

const runSequence = require('run-sequence');
const browserSync = require('browser-sync');
const config      = require('../config');
const ngrok       = require('ngrok');
const url         = require('url');
const fs          = require('fs');
const path        = require('path');
// const proxyMiddleware =   require('http-proxy-middleware');
//
// const proxy = proxyMiddleware(['/END_POINT_HERE'], {
//   changeOrigin  : true,
//   logLevel      : 'debug',
//   target        : 'http://example.com',
// });

const tunnel = (error, bsync) => {
  ngrok.connect(bsync.options.get('port'), (_e, url) => {
    console.log(`[NGROK] Started at: ${url}`);
  });
};

const folder = path.resolve(config.paths.dist);

module.exports = (gulp, options) => {
  // intermediary to reload browser on hbs html change
  gulp.task('hbs-watch', ['panini'], (done) => {
    browserSync.reload();
    done();
  });

  const catchAll = (req, res, next) => {
    let fileName = url.parse(req.url);
    fileName = fileName.href.split(fileName.search).join('');
    const fileExists = fs.existsSync(folder + fileName);
    if (!fileExists && fileName.indexOf('browser-sync-client') < 0) {
      req.url = '/';
    }
    return next();
  };

  return () => {
    runSequence(['clean'], [`styles:${options.env}`, `scripts:${options.env}`, 'panini', 'extras', 'images'], () => {
      browserSync({
        startPath: '/styleguide/',
        notify: false,
        port: 3000,
        server: {
          baseDir: [config.paths.dist],
          routes: {},
          // config for api proxy above
          middleware: catchAll
        }
      },
      tunnel);

      gulp.watch([`${config.paths.src}/images/**/*`]).on('change', browserSync.reload);
      gulp.watch([
        `${config.paths.data}/**/*`,
        `${config.paths.src}/templates/**/*`
      ], ['hbs-watch', 'extras']);
      gulp.watch(`${config.paths.styles}/**/*.scss`, [ 'lintStyles', `styles:${options.env}`]);
      gulp.watch(`${config.paths.scripts}/**/*`, ['lintScripts', `scripts:${options.env}`]);
    });
  };
};
