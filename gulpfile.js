const gulp = require('gulp');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const plumber = require('gulp-plumber');
const buffer = require('vinyl-buffer');
const server = require('gulp-express');
const babel = require('gulp-babel');

gulp.task('transpile-jsx', function() {
	return gulp.src('./jsx/**/*.jsx')
      .pipe(plumber())
      .pipe(babel({
            presets: ['react']
        }))
    	.pipe(gulp.dest('./components'));
});

gulp.task('generate-bundle', ['transpile-jsx'], function(){
  return browserify({ entries: ['./client/ProductListClient.js'] })
            .transform('babelify', {presets: ['es2015']})
            .bundle()
            .pipe(plumber())
            .pipe(source('ProductListClient.bundle.js'))
            .pipe(buffer())
            .pipe(gulp.dest('./public/js'));
});

gulp.task('reload-app', ['generate-bundle'], function() {
  server.run();
});

gulp.task('main', ['generate-bundle'], function () {
  // Start the server at the beginning of the task 
  server.run(['server.js']);

  //Components
  gulp.watch(['./client/**/*.js', './jsx/**/*.jsx'], ['reload-app']);

  //Public files
  gulp.watch('./public/**/*.*', server.notify);
  
  //Server
  gulp.watch('server.js', server.run);

});

gulp.task('default', ['main']); 