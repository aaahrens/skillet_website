const gulp = require("gulp");
const poststylus = require("poststylus");
const stylus = require("gulp-stylus");
const livereload = require("gulp-livereload");
const autoprefixer = require("autoprefixer");
const cssnext = require("cssnext");
const rucksack = require("rucksack-css");
const cssnano = require("gulp-cssnano");

function swallowError(error) {
    console.log(error);
    this.emit("end");
}

gulp.task("css", () => {
    const processors = [autoprefixer, cssnext, rucksack];
    return gulp
        .src("./src/styles/main.styl")
        .pipe(
            stylus({
                use: [poststylus(processors)],
                linenos: true
            })
        )
        .on("error", swallowError)
        .pipe(gulp.dest("./src/styles"))
        .pipe(cssnano())
        .pipe(livereload());
});

gulp.task("watch", () => {
    livereload.listen();
    gulp.watch("./src/styles/**/*.styl", ["css"]);
});
