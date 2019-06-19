var gulp = require("gulp"),
  sass = require("gulp-sass"),
  pug = require("gulp-pug"),
  browserSync = require("browser-sync"),
  concat = require("gulp-concat"),
  cssnano = require("gulp-cssnano"),
  rename = require("gulp-rename"),
  cleanCSS = require("gulp-clean-css"),
  csso = require("gulp-csso"),
  del = require("del"),
  cache = require("gulp-cache"),
  plumber = require("gulp-plumber"),
  autoprefixer = require("gulp-autoprefixer"),
  plumber = require("gulp-plumber");

  gulp.task('sass', function(){
    return gulp.src('source/sass/*.sass')
      .pipe(plumber())
      .pipe(sass())
      .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
      .pipe(gulp.dest('source/css/'))
      .pipe(browserSync.reload({stream: true}));
});

gulp.task("pug", function() {
  return gulp
    .src("source/pug/*.pug")
    .pipe(plumber())
    .pipe(
      pug({
        pretty: true
      })
    )
    .pipe(gulp.dest("source"))
    .pipe(browserSync.reload({ stream: true }));
});

gulp.task("browser-sync", function() {
  browserSync({
    server: {
      baseDir: "source/"
    }
  });
});

gulp.task("css-libs", function() {
  return gulp
    .src([
      "node_modules/@fancyapps/fancybox/dist/jquery.fancybox.css",
      "node_modules/hamburgers/dist/hamburgers.css",
      "node_modules/jquery.mmenu/dist/jquery.mmenu.all.css",
      "node_modules/nouislider/distribute/nouislider.css",
      "node_modules/jquery-form-styler/dist/jquery.formstyler.css",
      "node_modules/tooltipster/dist/css/tooltipster.bundle.css",
      "node_modules/slick-carousel/slick/slick.css"
    ])
    .pipe(concat("libs.min.css"))
    .pipe(cssnano())
    .pipe(gulp.dest("source/css"));
});

gulp.task("scripts", function() {
  return gulp
    .src([
      "node_modules/jquery/dist/jquery.min.js",
      "node_modules/@fancyapps/fancybox/dist/jquery.fancybox.js",
      "node_modules/masonry-layout/dist/masonry.pkgd.js",
      "node_modules/jquery.mmenu/dist/jquery.mmenu.all.js",
      "node_modules/nouislider/distribute/nouislider.js",
      "node_modules/jquery-form-styler/dist/jquery.formstyler.js",
      "node_modules/responsive-tabs/js/jquery.responsiveTabs.js",
      "node_modules/slick-carousel/slick/slick.js",
      "node_modules/tooltipster/dist/js/tooltipster.bundle.js"
    ])
    .pipe(concat("libs.min.js"))
    .pipe(gulp.dest("source/js"));
});

gulp.task("clean", function() {
  return del.sync("build");
});

gulp.task("build", ["clean", "pug", "sass", "scripts"], function() {
  var buildCss = gulp
    .src("source/css/*.css")
    .pipe(csso())
    .pipe(cleanCSS({ compatibility: "ie8" }))
    .pipe(gulp.dest("build/css"));

  var buildFonts = gulp.src("source/fonts/**/*").pipe(gulp.dest("build/fonts"));

  var buildJs = gulp.src("source/js/**/*").pipe(gulp.dest("build/js"));

  var buildHtml = gulp.src("source/*.html").pipe(gulp.dest("build"));

  var buildImg = gulp.src("source/img/**/*").pipe(gulp.dest("build/img"));
});

gulp.task("clear", function(callback) {
  return cache.clearAll();
});

gulp.task(
  "watch",
  ["browser-sync", "pug", "sass", "css-libs", "scripts"],
  function() {
    gulp.watch("source/sass/**/*.sass", ["sass"]);
    gulp.watch("source/pug/**/*.pug", ["pug"]);
    gulp.watch("source/js/*.js", browserSync.reload);
  }
);

gulp.task("default", ["watch"]);
