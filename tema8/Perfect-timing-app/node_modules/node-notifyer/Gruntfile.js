module.exports = function(grunt) {
// Gruntfile.js
grunt.initConfig({

    // get the configuration info from package.json ----------------------------
    // this way we can use things like name and version (pkg.name)
    pkg: grunt.file.readJSON('package.json'),

    // -------------------------------------
        eslint: {
            options: {
                config: 'eslint.json',
                reset: true
            },
            target: ['lib/**/*.js']
        },
    // -------------------------------------
   
    yuidoc: {
      compile: {
        name: '<%= pkg.name %>',
        description: '<%= pkg.description %>',
        version: '<%= pkg.version %>',
        url: '<%= pkg.homepage %>',
        options: {
          paths: 'lib',
         // themedir: 'path/to/custom/theme/',
          outdir: 'docs'
        }
      }
    }

});

    grunt.loadNpmTasks('grunt-contrib-yuidoc');
    grunt.loadNpmTasks('grunt-eslint');

     grunt.registerTask('default', [
     	  "eslint",
        //"yuidoc"
    ]);
};