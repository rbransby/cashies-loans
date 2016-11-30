'use strict';

const runSequence =       require('run-sequence');
const browserSync =       require('browser-sync');
const localtunnel =       require('localtunnel');
const config =            require('../config');

module.exports = (gulp, options) => {
  return () => {
    runSequence(['clean'], [`styles:${options.env}`, `scripts:${options.env}`, 'panini', 'extras', 'images'], () => {
      browserSync({
        notify: false,
        port: 3000,
        server: {
          baseDir: [config.paths.dist],
          routes: {}
        }
      }, (err, bs) => {
        // let options = {
        //   subdomain: 'oknwa'
        // };
        //
        // localtunnel(bs.options.get('port'), options, (err, tunnel) => {
        //   if(err) {
        //     console.log('localtunnel error:', err);
        //   } else {
        //     console.log('localtunnel created: ', tunnel.url);
        //   }
        // });
      });

      gulp.watch([`${config.paths.src}/images/**/*`]).on('change', browserSync.reload);
      gulp.watch([
        `${config.paths.data}/**/*`,
        `${config.paths.src}/templates/**/*`
      ], ['panini', 'extras']);
      gulp.watch(`${config.paths.styles}/**/*.scss`, [`styles:${options.env}`]);
      gulp.watch(`${config.paths.scripts}/**/*`, [`scripts:${options.env}`]);
    });
  };
};
