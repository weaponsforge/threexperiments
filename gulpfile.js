const gulp = require('gulp')
const browserSync = require('browser-sync').create()
const PORT = process.env.PORT || 3000
const root = './public'

// Browsersync server
const server = () => {
  browserSync.init({
    server: root,
    port: PORT
  })
}

// Files to watch
const watch = () => {
  gulp.watch(`${root}/*.html`).on('change', browserSync.reload)
  gulp.watch(`${root}/styles/*.css`).on('change', browserSync.reload)
  gulp.watch(`${root}/src/*.js`).on('change', browserSync.reload)
  gulp.watch(`${root}/src/world/*.js`).on('change', browserSync.reload)
  gulp.watch(`${root}/src/world/components/*.js`).on('change', browserSync.reload)
  gulp.watch(`${root}/src/world/systems/*.js`).on('change', browserSync.reload)
}

// Gulp tasks
gulp.task('browserSync', server)
gulp.task('watch', watch)
gulp.task('dev', gulp.series(gulp.parallel('browserSync', 'watch')))
