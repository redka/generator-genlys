var gulp = require('gulp');
var prompt = require('gulp-prompt');

gulp.task('default', function () {
  gulp.src('package.json')
    .pipe(prompt.prompt({
      type: 'list',
      name: 'task',
      message: 'What do you want to do?',
      choices: [
        'serve',
        'build'
      ]
    }, function (answer) {
      gulp.start(answer.task);
    }));
});