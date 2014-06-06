module.exports = function(grunt) {

  grunt.initConfig({
    'min': {
      'dist': {
        'src': 'src/limitcheckbox.js',
        'dest': 'build/limitcheckbox-min.js'
      }
    },
    copy: [
      {
        expand: true,
        cwd: 'src',
        src: '**',
        dest: 'vendor/assets/javascripts'
      },
      {
        expand: true,
        cwd: 'build',
        src: '**',
        dest: 'vendor/assets/javascripts'
      }
    ]
  });

  grunt.loadNpmTasks('grunt-yui-compressor');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('default', ['min', 'copy']);
};
