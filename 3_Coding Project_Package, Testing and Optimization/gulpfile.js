import gulp from "gulp";
import shell from "gulp-shell";

// build
const build = shell.task("npx parcel build index.html");
const serve = shell.task("npx parcel ./index.html");
const test = shell.task("npx mocha test/**/*.js");
const cypress = shell.task("npx cypress run");

export { build, serve, test, cypress };
export default gulp.series(build, serve);
