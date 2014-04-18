module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    bower: {
      install: {
        options: {
          targetDir: 'public/vendors',
          layout: 'byType',
          install: true,
          verbose: true,
          cleanTargetDir: false,
          cleanBowerDir: false,
          bowerOptions: {}
        }
      }
    },

    clean: ['public/css/*.min.css', 'public/js/backbone/templates/tpl/'],

    copy: {
      main: {
        expand: true,
        flatten: true,
        src: 'public/vendors/requirejs/require.js',
        dest: 'public/js',
        filter: 'isFile'
      }
    },

    jade: {
      apps: {
        files: {
          'public/js/backbone/templates/tpl/': 'public/js/backbone/templates/**/*.jade'
        },
        options: {
          basePath: 'public/js/backbone/templates',
          wrap: {
            wrap: true,
            amd: true,
            node: false,
            dependencies: 'jade'
          },
          runtime: false
        }
      },
    },

    jshint: {
      all: ['public/js/*.js'],
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        laxcomma: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        node: true,
        indent: 2,
        devel: true,
        globals: {
          window: true,
          document: true,
          location: true,
          define: true,
          require: true,
          requirejs: true,
          Backbone: true,
          PeopleCollection:true,
          PeopleModel:true,
          // Here places words gloabla that not need tobe defined
          $: true,
          _:true,
          Mustache:true,
          Rectangulo:true,
        },
        ignores: ['public/js/require.js', 'public/js/backbone/templates/tpl/*.js']
      },
    },

    processhtml: {
      dev: {
        files: {
          'src/main/webapp/index.htm': ['src/main/webapp/index_base.htm']
        }
      },
      prod: {
        files: {
          'src/main/webapp/index.htm': ['src/main/webapp/index_base.htm']
        }
      }
    },

    requirejs: {
      app: {
        options: {
          // dir where r.js is located
          baseUrl: 'public/js',
          // optimizeCss: 'application.css',
          // name of the output minified and optimizied code
          name: "main",
          out: "public/js/main-built.js",
          generateSourceMaps: true,
          preserveLicenseComments: false,
          inlineText: true,
          findNestedDependencies: true,
          mainConfigFile: "public/js/main.js",
          skipModuleInsertion: false
          //If set to true, any files that were combined into a build bundle will be
          //removed from the output folder.
        }
      }
    },


    watch: {
      options: {
        event: ['added', 'changed']
      },
      jade: {
        files: ['public/js/backbone/templates/*.jade'],
        tasks: ['newer:jade','jade']
      },
      backbone: {
        files: ['public/js/backbone/**/*.js'],
        tasks: ['jshint','concat:backbone','uglify:backbonemin']
      }
    }

  });

  // EXTERNAL PLUGINS //


  // JS Code quality
  grunt.loadNpmTasks('grunt-contrib-jshint');
  // Watcher, execute multiple task when a file has been changed
  grunt.loadNpmTasks('grunt-contrib-watch');
  // Compile Jade templates to HTML !!!IMPORTANT there is another contrib from jade to HTML
  grunt.loadNpmTasks('grunt-jade');
  // Remove files
  grunt.loadNpmTasks('grunt-contrib-clean');
  // watch newer files
  grunt.loadNpmTasks('grunt-newer');
  // Testing Js code using Jasmine and Phantom
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  // For building the static application
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  // Compress & minify CSS
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  // Load Bower.json
  grunt.loadNpmTasks('grunt-bower-task');
  // Let move files
  grunt.loadNpmTasks('grunt-contrib-copy');
  // Set dist or dev environment
  grunt.loadNpmTasks('grunt-processhtml');



  // TASKS //

  // production task
  grunt.registerTask('production', ['bower', 'clean:pre', 'sass', 'cssmin', 'copy', 'jade', 'processhtml:prod', 'requirejs']);
  // default task
  grunt.registerTask('default', ['bower', 'clean', 'jshint', 'copy', 'jade']);
  // untest task
  grunt.registerTask('notest', ['clean','jade', 'concat']);
  // test task
  grunt.registerTask('test', ['jshint', 'jasmine']);
  // jshint task
  grunt.registerTask('checkjs', ['jshint']);
  // just turn sass files into Css
  grunt.registerTask('style', ['clean:style', 'sass', 'cssmin']);
  // just run require app
  grunt.registerTask('req', ['clean','requirejs']);
    // just run require app
  grunt.registerTask('jad', ['jade']);

};