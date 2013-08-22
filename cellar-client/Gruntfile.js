// Wrapper function with one parameter
module.exports = function(grunt) {

    grunt.initConfig({
        jshint: {
            options: {
                trailing: true
            },
            target: {
                src : ['js/**/*.js']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('default', ['jshint']);
};