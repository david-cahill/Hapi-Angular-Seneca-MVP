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
    lab: {
      color       : true,
      coverage    : true,
      minCoverage : 100
    },
    githooks: {
      all: {
        'pre-commit': 'jshint lab',
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-githooks');
  grunt.loadNpmTasks("grunt-lab");

  // Default task(s).
  grunt.registerTask('default', ['jshint']);

};