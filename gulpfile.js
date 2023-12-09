	import gulp from 'gulp'
	import * as dartSass from 'sass'
	import gulpSass from 'gulp-sass'
	const sass = gulpSass(dartSass)
	import cssnano from 'gulp-cssnano'
	import webp from 'gulp-webp'
	import autoprefixer from 'gulp-autoprefixer'
	import rename from 'gulp-rename'
	import babel from 'gulp-babel'
	import uglify from 'gulp-uglify'
	import sourcemaps from 'gulp-sourcemaps'
	import browserSyncModule, { reload } from 'browser-sync'
	const browserSync = browserSyncModule.create()
	import clean from 'gulp-clean'
	import fileinclude from 'gulp-file-include'
	import replace from 'gulp-replace'

	const paths = {
		html: './src/**/*.html',
		sass: './src/sass/**/*.scss',
		sassDest: './dist/css',
		js: './src/js/**/*.js',
		jsDest: './dist/js',
		img: './src/img/**/*.*',
		imgDest: './dist/img',
		dist: './dist',
	}

	function sassCompiler() {
		return gulp
			.src(paths.sass)
			.pipe(sourcemaps.init())
			.pipe(sass().on('error', sass.logError))
			.pipe(
				autoprefixer({
					cascade: false,
				})
			)
			.pipe(cssnano())
			.pipe(
				rename({
					suffix: '.min',
				})
			)
			.pipe(sourcemaps.write())
			.pipe(gulp.dest(paths.sassDest))
	}

	function jsCompiler() {
		return gulp
			.src(paths.js)
			.pipe(sourcemaps.init())
			.pipe(babel({ presets: ['@babel/env'] }))
			.pipe(uglify())
			.pipe(
				rename({
					suffix: '.min',
				})
			)
			.pipe(sourcemaps.write())
			.pipe(gulp.dest(paths.jsDest))
	}

	function imgToWebp() {
		return gulp.src(paths.img).pipe(webp()).pipe(gulp.dest(paths.imgDest))
	}

	function cleanFiles() {
		return gulp
		.src(paths.dist, {read: false})
		.pipe(clean())
	}

	function startBrowserSync(done) {
		browserSync.init({
			server: {
				baseDir: './dist',
			},
		})
		done()
	}
	function watchForChanges(done) {
		gulp.watch('./dist/*.html').on('change', browserSync.reload);
		gulp.watch([paths.html, paths.sass, paths.js], mainCompilers).on('change', browserSync.reload)
		gulp.watch(paths.img, imgToWebp).on('change', browserSync.reload)
		done()
	}

	function handleFiles () {
		return gulp
		.src(paths.html)
		.pipe(fileinclude({
			prefix: '@@',
			basepath: '@file'
		}))
		.pipe(replace('.jpg', '.webp'))
		.pipe(gulp.dest(paths.dist))
	}

	function updateImagePath() {
		return gulp.src('./dist/**/*.*') // lub 'dist/**/*.css' dla plików CSS
			.pipe(replace('.jpg', '.webp'))
			.pipe(gulp.dest(paths.dist));
	}

	
	const mainCompilers = gulp.series(gulp.parallel(sassCompiler, jsCompiler), handleFiles, updateImagePath)
	const defaultFunctions = gulp.series(mainCompilers, startBrowserSync, watchForChanges)

	export const imgc = imgToWebp
	export const filesclean = cleanFiles
	export default defaultFunctions
