module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      options: {
        node: true,
        validthis: true,
        globals: {
          angular: true
        }
      },
      all: ['controllers/**/*.js', 'public/js/**/*.js', 'services/**/*.js', 'lib/**/*.js', 'test/**/*.js']
    },
    githooks: {
      all: {
        'pre-commit': 'jshint',
      }
    }
  });
  // Load the plugin that provides the "jshint" task.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-githooks');

  // Default task(s).
  grunt.registerTask('default', ['jshint']);

};