const gulp = require('gulp');
const sass = require('gulp-sass');
// const uglify = require('gulp-uglify');
// const babel = require('gulp-babel');
// const cleanCSS = require('gulp-clean-css');
// const imagemin = require('gulp-imagemin');
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');
// const clean = require('gulp-clean');


// For local development
function style() {
    return gulp.src('./scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(gulp.dest('./css/'))
        .pipe(browserSync.stream());
}

function watch() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
    gulp.watch("./scss/**/*.scss", style);
    gulp.watch("./*.html").on("change", browserSync.reload);
    gulp.watch("./js/**/*.js").on("change", browserSync.reload);
}

exports.style = style
exports.watch = watch;



// For Production

// Paths
// var paths = {
//     public: {
//         www: './'
//     },
// 	src: {
// 		root: './',
// 		html: './*.html',
//         css: './css/**/*.css',
//         js: './js/**/*.js',
// 		img: './assets/img/**/*.+(png)',
// 		scss: './scss/**/*.scss',
// 	},
// 	dist: {
//         root: './',
// 		css: './css/',
// 		img: './assets/img',
// 		js: './js/',
// 	},
// };


// Compile SCSS
// gulp.task('sass', () => {
// 	return gulp
// 		.src(paths.src.scss)
// 		.pipe(
// 			sass({
// 				outputStyle: 'expanded',
// 			}).on('error', sass.logError),
// 		)
// 		.pipe(autoprefixer())
// 		.pipe(gulp.dest(paths.src.root + '/css'));
// });


// Minify + Combine CSS
// gulp.task('css', () => {
// 	return gulp
// 		.src(paths.src.css)
// 		.pipe(
// 			cleanCSS({
// 				compatibility: 'ie8',
// 			}),
// 		)
// 		.pipe(gulp.dest(paths.dist.css))
// 		.pipe(browserSync.stream());
// });

// Minify + Combine JS
// gulp.task('js', () => {
// 	return gulp
// 		.src(paths.src.js)
// 		.pipe(
// 			babel({
// 				presets: ['@babel/preset-env'],
// 			}),
// 		)
// 		.pipe(uglify())
// 		.pipe(gulp.dest(paths.dist.js))
// 		.pipe(browserSync.stream());
// });



// Compress Image
// gulp.task('img', () => {
// 	return gulp
// 		.src(paths.src.img)
// 		.pipe(
// 			imagemin([
// 				imagemin.optipng({
// 					optimizationLevel: 5,
// 				}),
// 			]),
// 		)
// 		.pipe(gulp.dest(paths.dist.img));
// });



// clean dist
// gulp.task('clean', function () {
// 	return gulp.src(paths.dist.root).pipe(clean());
// });


// Prepare all src for production
// gulp.task('build', gulp.series('sass', 'css', 'js'));


// Watch (SASS, CSS, JS, and HTML) reload browser on change
// gulp.task('watch', () => {
// 	browserSync.init({
// 		server: {
// 			baseDir: paths.public.www,
// 		},
// 	});

// 	gulp.watch(paths.src.scss, gulp.series('sass'));
//     gulp.watch(paths.src.css, gulp.series('css'));
//     gulp.watch(paths.src.js).on("change", browserSync.reload);
// 	gulp.watch(paths.src.html).on('change', browserSync.reload);
// });
