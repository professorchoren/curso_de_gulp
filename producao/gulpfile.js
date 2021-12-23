const { src, dest, series, parallel } = require("gulp");
const cssnano = require("gulp-cssnano");
const sass = require("gulp-sass")(require("sass"));
const ts = require("gulp-typescript");
const uglify = require("gulp-uglify");
const concat = require("gulp-concat");
const rename = require("gulp-rename");

const buildCSS = () => {
  return src("src/sass/*.scss").pipe(sass()).pipe(dest("src/css/"));
};

const buildCSSProd = () => {
  return src("src/sass/*.scss")
    .pipe(
      sass({
        outputStyle: "compressed",
      })
    )
    .pipe(concat("style.css"))
    .pipe(cssnano())
    .pipe(
      rename(function (path) {
        path.extname = ".min.css";
      })
    )
    .pipe(dest("dist/css/"));
};

const buildTS = () => {
  return src("src/ts/*.ts")
    .pipe(
      ts({
        noImplicitAny: true,
        target: "ES6",
        module: "ES6",
      })
    )
    .pipe(dest("src/js"));
};

const buildTSProd = () => {
  return src("src/ts/*.ts")
    .pipe(
      ts({
        noImplicitAny: true,
        target: "ES6",
        module: "ES6",
      })
    )
    .pipe(concat("bundle.js"))
    .pipe(uglify())
    .pipe(dest("dist/js"));
};
