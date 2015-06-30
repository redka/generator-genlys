var args = require('yargs').argv;

module.exports = {
  // Angular app name
  'ngAppName': 'genlys',

  // Destination directory
  'destDir': '.tmp',

  // Distribution directory
  'distDir': 'dist',

  // HTTP port for browser-sync
  'port': process.env.PORT || 9000,

  // Environment:
  // 1) Get from command line arguments. Example: gulp task_name --env=production
  // 2) Get from environment variable (process.env.NODE_ENV)
  // 3) Or set default development
  'env': args.env || process.env.NODE_ENV || 'development',

  // paths to styles
  'srcStyles': [
    'app/styles/**/*.styl',
    'app/styles/**/*.css'
  ],

};