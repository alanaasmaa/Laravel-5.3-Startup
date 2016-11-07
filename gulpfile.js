const   elixir = require('laravel-elixir'),
        postStylus = require('poststylus'),
        lost = require('lost'),
        axis = require('axis'),
        rupture = require('rupture'),
        htmlmin = require('gulp-htmlmin');

require('laravel-elixir-vue');
require('laravel-elixir-imagemin');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir.config.sourcemaps = true;

elixir.extend('compress', function() {
    new elixir.Task('compress', function() {
        return gulp.src('./storage/framework/views/*')
            .pipe(htmlmin({
                collapseWhitespace:    true,
                removeAttributeQuotes: true,
                removeComments:        true,
                minifyJS:              true,
            }))
            .pipe(gulp.dest('./storage/framework/views/'));
    })
    .watch('./resources/views/**/*.blade.php');
});

elixir(mix => {
    mix
    .stylus('app.styl', null, {
        compress: true,
        use: [
            axis(),
            rupture(),
            postStylus(['lost', 'postcss-position'])
        ]
    })
    .webpack('app.js')
    .version('css/app.css')
    .imagemin({
        optimizationLevel: 3,
        progressive: true,
        interlaced: true
    })
    .browserSync({
        proxy: 'homestead.app',
        notify: false
    })
    .compress();
});
