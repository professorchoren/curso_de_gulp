const { src, dest } = require("gulp");
const concat = require("gulp-concat");

exports.default = () => {
  return src("src/**/*.css").pipe(concat("bundle.css")).pipe(dest("dist/css/"));
};
