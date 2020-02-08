const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
 
exports.styles = () => (
    gulp.src('assets/stylesheets/style.css')
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(gulp.dest('build'))
);

exports.watch = () => (
	gulp.watch('assets/stylesheets/style.css', gulp.series('styles'))
);