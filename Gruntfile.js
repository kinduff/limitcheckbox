module.exports = function(grunt) {

  grunt.initConfig({
    'min': {
      'dist': {
        'src': 'src/limitcheckbox.js',
        'dest': 'build/limitcheckbox-min.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-yui-compressor');

  grunt.registerTask('default', ['min']);
};
