// generated on 2016-06-13 using generator-webapp 2.1.0
const gulp = require('gulp');
const gulpLoadPlugins = require('gulp-load-plugins');
const browserSync = require('browser-sync');
const del = require('del');
const lost = require('lost');
const notify = require('gulp-notify');
const wiredep = require('wiredep').stream;

const $ = gulpLoadPlugins();
const reload = browserSync.reload;

// Github Pages Deploy
  gulp.task('deploy', function() {
    return gulp.src('./dist/**/*')
      .pipe($.ghPages());
  });

// Move M-Audio Slider
  gulp.task('m-audio-slider', function() {
    return gulp.src('app/m-audio-slider/**/*')
    .pipe(gulp.dest('dist/m-audio-slider'))
  });


// Nunjucks Templates
  gulp.task('views', () => {
    return gulp.src('app/pages/*.nunjucks')
    .pipe($.nunjucksRender({
        path: 'app'
      }))
      .pipe(gulp.dest('.tmp'))
  });

// SASS Styles
  gulp.task('styles', () => {
// NOTIFIES CSS ERRORS
  function errorAlert(error){
    notify.onError({title: "SCSS Error", message: "Check your terminal", sound: "Sosumi"})(error); //Error Notification
    console.log(error.toString());//Prints Error to Console
    this.emit("end"); //End function
  };

// POST CSS PLUGINS
  var processors = [
      lost()
  ];

    return gulp.src('app/styles/*.scss')
      .pipe($.plumber({errorHandler: errorAlert}))
      .pipe($.sourcemaps.init())
      .pipe($.sass.sync({
        outputStyle: 'expanded',
        precision: 10,
        includePaths: ['.']
      }).on('error', $.sass.logError))
      .pipe($.autoprefixer({browsers: ['> 1%', 'last 2 versions', 'Firefox ESR']}))
      .pipe($.size({title: 'styles'}))
      .pipe($.sourcemaps.write())
      .pipe(gulp.dest('.tmp/styles'))
      .pipe(reload({stream: true}));
  });


// SCRIPTS
  gulp.task('scripts', () => {
    return gulp.src('app/scripts/**/*.js')
      .pipe($.plumber())
      .pipe($.sourcemaps.init())
      .pipe($.babel())
      .pipe($.size({title: 'scripts'}))
      .pipe($.sourcemaps.write('.'))
      .pipe(gulp.dest('.tmp/scripts'))
      .pipe(reload({stream: true}));
  });

function lint(files, options) {
  return gulp.src(files)
    .pipe(reload({stream: true, once: true}))
    .pipe($.eslint(options))
    .pipe($.eslint.format())
    .pipe($.if(!browserSync.active, $.eslint.failAfterError()));
}


// Script Linting
  gulp.task('lint', () => {
    return lint('app/scripts/**/*.js', {
      fix: true
    })
      .pipe(gulp.dest('app/scripts'));
  });
  gulp.task('lint:test', () => {
    return lint('test/spec/**/*.js', {
      fix: true,
      env: {
        mocha: true
      }
    })
      .pipe(gulp.dest('test/spec/**/*.js'));
  });

gulp.task('html', ['views', 'styles', 'scripts'], () => {
  return gulp.src(['app/*.html', '.tmp/*.html'])
    .pipe($.useref({searchPath: ['.tmp', 'app', '.']}))
    .pipe($.if('*.js', $.uglify()))
    .pipe($.if('*.css', $.cssnano({safe: true, autoprefixer: false})))
    // .pipe($.if('*.html', $.htmlmin({collapseWhitespace: true})))
    .pipe(gulp.dest('dist'));
});



// Image Compression
  gulp.task('images', () => {
    return gulp.src('app/images/**/*')
      // .pipe($.cache($.imagemin({
      //   progressive: true,
      //   interlaced: true,
      //   // don't remove IDs from SVGs, they are often used
      //   // as hooks for embedding and styling
      //   svgoPlugins: [{cleanupIDs: false}]
      // })))
      .pipe(gulp.dest('dist/images'));
  });


// Fonts
  gulp.task('fonts', () => {
    return gulp.src(require('main-bower-files')('**/*.{eot,svg,ttf,woff,woff2}', function (err) {})
      .concat('app/fonts/**/*'))
      .pipe(gulp.dest('.tmp/fonts'))
      .pipe(gulp.dest('dist/fonts'));
  });


// Extras
  gulp.task('extras', () => {
    return gulp.src([
      'app/*.*',
      '!app/*.html'
    ], {
      dot: true
    }).pipe(gulp.dest('dist'));
  });


// Cleans the Dist Folder
  gulp.task('clean', del.bind(null, ['.tmp', 'dist']));


// Browser Sync
  gulp.task('serve', ['views', 'styles', 'scripts', 'fonts'], () => {
    browserSync({
      notify: false,
      port: 9999,
      server: {
        baseDir: ['.tmp', 'app'],
        routes: {
          '/bower_components': 'bower_components'
        }
      }
    });

    gulp.watch([
      'app/*.html',
      'app/images/**/*',
      '.tmp/fonts/**/*'
    ]).on('change', reload);

    gulp.watch('app/**/*.html', ['views', reload]);
    gulp.watch('app/**/*.nunjucks', ['views', reload]);
    gulp.watch('app/styles/**/*.scss', ['styles']);
    gulp.watch('app/scripts/**/*.js', ['scripts']);
    gulp.watch('app/fonts/**/*', ['fonts']);
    gulp.watch('bower.json', ['wiredep', 'fonts']);
  });

gulp.task('serve:dist', () => {
  browserSync({
    notify: false,
    port: 9999,
    server: {
      baseDir: ['dist']
    }
  });
});

gulp.task('serve:test', ['scripts'], () => {
  browserSync({
    notify: false,
    port: 9999,
    ui: false,
    server: {
      baseDir: 'test',
      routes: {
        '/scripts': '.tmp/scripts',
        '/bower_components': 'bower_components'
      }
    }
  });

  gulp.watch('app/scripts/**/*.js', ['scripts']);
  gulp.watch('test/spec/**/*.js').on('change', reload);
  gulp.watch('test/spec/**/*.js', ['lint:test']);
});

// inject bower components
  gulp.task('wiredep', () => {
    gulp.src('app/styles/*.scss')
      .pipe(wiredep({
        ignorePath: /^(\.\.\/)+/
      }))
      .pipe(gulp.dest('app/styles'));

    gulp.src('app/layouts/*.nunjucks')
      .pipe(wiredep({
        // exclude: ['bootstrap-sass'],
        ignorePath: /^(\.\.\/)*\.\./,
         fileTypes: {
           njk: {
             block: /(([ \t]*)<!--\s*bower:*(\S*)\s*-->)(\n|\r|.)*?(<!--\s*endbower\s*-->)/gi,
             detect: {
               js: /<script.*src=['"]([^'"]+)/gi,
               css: /<link.*href=['"]([^'"]+)/gi
             },
             replace: {
               js: '<script src="{{filePath}}"></script>',
               css: '<link rel="stylesheet" href="{{filePath}}" />'
             }
           }
         }
       }))
      .pipe(gulp.dest('app/layouts'));
  });

gulp.task('build', ['lint', 'html', 'images', 'fonts', 'extras', 'm-audio-slider'], () => {
  return gulp.src('dist/**/*').pipe($.size({title: 'build', gzip: true}));
});

gulp.task('default', ['clean'], () => {
  gulp.start('build');
});
