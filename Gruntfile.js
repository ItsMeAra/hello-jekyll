/**
 * Grunt module
 */
module.exports = function(grunt) {

    /**
    * Load all npm tasks
    */

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),


        /**
         * Compile LESS files
         */

        less: {
            development: {
                options: {
                    paths: ["public/css"]
                },
                files: {
                    "public/css/master.css": "public/less/master.less"
                }
            },

            production: {
                options: {
                    paths: ["public/css"],
                    compress: true,
                    report: 'gzip'
                },
                files: {
                    "public/css/master.min.css": "public/less/master.less"
                }
            }
        },    



        /**
         * Uglify (minify) JavaScript files
         */

        uglify: {
            dist: {
                files: {
                  'public/js/master.min.js': 'public/js/master.js'
                }
            }
        },



        /**
         * Minify Jekyll output HTML
         */

        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: [{
                    expand: true,
                    cwd: '_site',
                    src: ['**/*.{html,php}'],
                    dest: '_site'
                }]
            }
        },



        /**
         * Instead of getting Jekyll to rebuild every time a file in "public" is changed
         * (slow), replace the old "public" with the new one via "copy". This only gets
         * run in the "watch" task becuase Jekyll does it on the inital build.
         */

        copy: {
            public : {
                files: [{
                    expand: true,
                    src: ['public/**/*'],
                    dest: '_site'
                }]
            }
        },



        /**
         * Build Jekyll site
         */

        jekyll: {
            dist: {
                options: {
                    livereload: true
                }
            }
        },



        /**
         * Start server from Jekyll output
         */

        connect: {
            server: {
                options: {
                    hostname: '*',
                    port: 9001,
                    base: '_site'
                }
            }
        },



        /**
         * Runs tasks against changed watched files
         */

        watch: {
            options: {
                livereload: true
            },

            less: {
                files: ['public/less/**/*.less'],
                tasks: ['less:development'],
                options: {
                    spawn: true
                }
            },

            // uglify: {
            //     files: 'public/js/main.js',
            //     tasks: ['uglify'],
            //     options: {
            //         spawn: false
            //     }
            // },

            htmlmin: {
                files: '_site/**/*.{html}',
                tasks: ['htmlmin'],
                options: {
                    spawn: false
                }
            },

            jekyll: {
                files: ['_includes/**/*', '_layouts/**/*', '_plugins/**/*', '_posts/**/*', '*.html', '_config.yml'],
                tasks: ['jekyll'],
                options: {
                    spawn: false
                }
            },

            copy: {
                files: ['public/**/*'],
                tasks: ['copy'],
                options: {
                    spawn: false
                }
            }
        }



        /**
         * Upload new site files to server
         */

        // ftpush: {
        //   dist: {
        //     auth: {
        //       host: 'whatever.com',
        //       port: 21,
        //       authKey: 'whatever.com'
        //     },
        //     src: '_site',
        //     dest: '/public_html/root',
        //     exclusions: ['page*', '!**/*/page*'],
        //     keep: ['favicon.ico']
        //   }
        // },



        /**
         * Upload new site files to GitHub
         */

        // shell: {
        //   git: {
        //     command: [
        //       'git add --all',
        //       'git commit -m "<%= grunt.template.today("isoDateTime") %>"',
        //       'git pull',
        //       'git push'
        //     ].join('&&')
        //   }
        // }

    });


    grunt.registerTask('default', [
        'connect',
        'less:development',
        // 'uglify',
        'jekyll',
        // 'htmlmin',
        'watch'
    ]);

    grunt.registerTask('prod', [
        'connect',
        'less:production',
        'uglify',
        'jekyll',
        'htmlmin'
    ]);    

    // grunt.registerTask('push', [
        //'ftpush',
        //'shell'
    // ]);

};