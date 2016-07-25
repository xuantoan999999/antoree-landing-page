// Generated on 2016-01-06 using
// generator-webapp 1.1.0
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// If you want to recursively match all subfolders, use:
// 'test/spec/**/*.js'

module.exports = function(grunt) {
    var modRewrite = require('connect-modrewrite');

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);
    // Automatically load required grunt tasks
    require('jit-grunt')(grunt, {
        useminPrepare: 'grunt-usemin'
    });

    // Configurable paths
    var config = {
        app: 'app',
        dist: 'dist',
        node: 'node_modules',
        test: 'test'
    };

    // Define the configuration for all the tasks
    grunt.initConfig({

        // Project settings
        config: config,

        // Watches files for changes and runs tasks based on the changed files
        watch: {
            bower: {
                files: ['bower.json'],
                tasks: ['wiredep']
            },
            ts: {
                files: ['<%= config.app %>/**/{,*/}*.ts'],
                tasks: ['typescript']
            },
            jade: {
                files: ['<%= config.app %>/**/{,*/}*.jade'],
                tasks: ['jade']
            },
            simple_include: {
                files: ['<%= config.app %>/**/{,*/}*.{html,tpl}'],
                tasks: ['simple_include:server']
            },
            babel: {
                files: ['<%= config.app %>/**/{,*/}*.js'],
                tasks: ['babel:dist']
            },
            babelTest: {
                files: ['test/spec/*.js'],
                tasks: ['babel:test', 'test:watch']
            },
            gruntfile: {
                files: ['Gruntfile.js']
            },
            compass: {
                files: ['<%= config.app %>/**/{,*/}*.{scss,sass}'],
                tasks: ['compass:server', 'postcss']
            },
            styles: {
                files: ['<%= config.app %>/**/{,*/}*.css'],
                tasks: ['newer:copy:styles', 'postcss']
            }
        },

        // Remove code
        bzstrip: {
            options: {
                cssjs: {
                    angular:'\\/*\\/\\*\\s+bzs:angular(.*?)\\s+\\*\\/[\\s\\S]*?\\/*end:bzs:angular\\s+\\*\\/\\s+',
                    facebook:'\\/*\\/\\*\\s+bzs:facebook(.*?)\\s+\\*\\/[\\s\\S]*?\\/*end:bzs:facebook\\s+\\*\\/\\s+',
                    recaptcha:'\\/*\\/\\*\\s+bzs:recaptcha(.*?)\\s+\\*\\/[\\s\\S]*?\\/*end:bzs:recaptcha\\s+\\*\\/\\s+',
                    youtube:'\\/*\\/\\*\\s+bzs:youtube(.*?)\\s+\\*\\/[\\s\\S]*?\\/*end:bzs:youtube\\s+\\*\\/\\s+',
                    ga:'\\/*\\/\\*\\s+bzs:ga(.*?)\\s+\\*\\/[\\s\\S]*?\\/*end:bzs:ga\\s+\\*\\/\\s+',
                    gmap:'\\/*\\/\\*\\s+bzs:gmap(.*?)\\s+\\*\\/[\\s\\S]*?\\/*end:bzs:gmap\\s+\\*\\/\\s+'
                },
                html:{
                    angular: '<!--\\s*bzs:angular(.*?)\\s+-->[\\s\\S]*?<!--\\s*end:bzs:angular\\s*-->\\s+',
                    facebook: '<!--\\s*bzs:facebook(.*?)\\s+-->[\\s\\S]*?<!--\\s*end:bzs:facebook\\s*-->\\s+',
                    recaptcha: '<!--\\s*bzs:recaptcha(.*?)\\s+-->[\\s\\S]*?<!--\\s*end:bzs:recaptcha\\s*-->\\s+',
                    youtube: '<!--\\s*bzs:youtube(.*?)\\s+-->[\\s\\S]*?<!--\\s*end:bzs:youtube\\s*-->\\s+',
                    ga: '<!--\\s*bzs:ga(.*?)\\s+-->[\\s\\S]*?<!--\\s*end:bzs:ga\\s*-->\\s+',
                    gmap: '<!--\\s*bzs:gmap(.*?)\\s+-->[\\s\\S]*?<!--\\s*end:bzs:gmap\\s*-->\\s+'
                }
            },
            server: {
                files: [{
                    expand: true,
                    cwd: '<%= config.app %>',
                    dest: '<%= config.app %>',
                    src: '**/{,*/}*.{css,scss,html,tpl,js}'
                }]
            }
        },

        // Compress dist to file
        compress: {
            dist: {
                options: {
                    archive: function() {
                        var manifest = grunt.file.readJSON('bower.json');
                        return manifest.name + manifest.version + '.zip';
                    }
                },
                files: [{
                    expand: true,
                    dot: true,
                    cwd: 'dist/',
                    src: ['**/*'],
                    dest: ''
                }]
            }
        },

        // Angular automate injection
        ngAnnotate: {
            options: {
                singleQuotes: true
            },
            app: {
                files: [{
                    expand: true,
                    cwd: '.tmp',
                    src: ['**/*.js'],
                    dest: '.tmp'
                }]
            }
        },

        // Shell command
        shell: {
            options: {
                stdout: true,
                stderr: true
            },
            target: {
                command: function(params) {
                    var cli;
                    switch (params) {
                        case 'android':
                            cli = 'cocoonjs run android';
                            break;
                        case 'ios':
                            cli = 'cocoonjs run ios';
                            break;
                        case 'desktop':
                            cli = 'electron <%= config.app %>/desktop';
                            break;
                        case 'e2e':
                            cli = 'node <%= config.node %>/protractor/bin/protractor <%= config.test %>/e2e.js';
                            break;
                        case 'unit':
                            cli = '<%= config.node %>/karma/bin/karma start <%= config.test %>/unit.js';
                            break;
                        case 'rmangular':
                            cli = 'bower uni --save angular-sanitize angular-resource angular-messages angular-animate angular-ui-router angular-toastr angular-cache angular-translate angular-google-analytics ngprogress\nbower uni --save-dev angular-mocks\nbower uni --save angular\ngrunt wiredep';
                            break;
                        case 'rmga':
                            cli = 'bower uni --save angular-google-analytics\ngrunt wiredep';
                            break;
                    }
                    return cli;
                }
            }
        },

        // Import static file
        simple_include: {
            server: {
                src: ['<%= config.app %>/*.html'],
                dest: '.tmp/'
            },
            dist: {
                src: ['<%= config.app %>/*.html'],
                dest: '<%= config.dist %>/'
            }
        },

        // Compiles TypeScript to JavaScript
        typescript: {
            base: {
                src: ['<%= config.app %>/**/*.ts'],
                dest: '<%= config.app %>',
                options: {
                    module: 'amd', //or commonjs
                    target: 'es5', //or es3
                    basePath: '<%= config.app %>',
                    sourceMap: false,
                    declaration: false,
                    comments: true
                }
            }
        },

        // Compiles Jade to HTML
        jade: {
            options: {
                pretty: true,
            },
            server: {
                files: [{
                    expand: true,
                    cwd: '<%= config.app %>',
                    dest: '.tmp',
                    src: '*.jade',
                    ext: '.html'
                }]
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= config.app %>',
                    dest: '<%= config.dist %>',
                    src: '*.jade',
                    ext: '.html'
                }]
            }
        },

        // AngularJs partials to js
        ngtemplates: {
            myApp: {
                cwd: '<%= config.app %>',
                src: 'angularjs/**/*.tpl',
                dest: '<%= config.app %>/angularjs/templates.js',
                options: {
                    htmlmin: {
                        collapseWhitespace: true,
                        collapseBooleanAttributes: true
                    }
                }
            }
        },
        browserSync: {
            options: {
                open: 'external',
                notify: true,
                reloadDelay: 2000,
                background: true,
                watchOptions: {
                    ignored: ''
                }
            },
            livereload: {
                options: {
                    files: [
                        '<%= config.app %>/*.html',
                        '<%= config.app %>/**/*.tpl',
                        '<%= config.app %>/images/{,*/}*',
                        '.tmp/styles/{,*/}*.css',
                        '.tmp/scripts/{,*/}*.js'
                    ],
                    port: 9123,
                    server: {
                        baseDir: ['.tmp', config.app],
                        routes: {
                            '/bower_components': './bower_components'
                        }
                    },
                    middleware: [
                        modRewrite(['!\.mp3|\.mp4|\.html|\.tpl|\.js|\.css|\.png|\.jpg|\.woff|\.woff2|\.ttf|\.svg|\.eot$ /index.html [L]'])
                    ]
                }
            },
            test: {
                options: {
                    port: 9124,
                    open: false,
                    logLevel: 'silent',
                    host: 'localhost',
                    server: {
                        baseDir: ['.tmp', './test', config.app],
                        routes: {
                            '/bower_components': './bower_components'
                        }
                    }
                }
            },
            dist: {
                options: {
                    background: false,
                    server: '<%= config.dist %>'
                }
            }
        },

        // Empties folders to start fresh
        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: [
                        '<%= config.dist %>/*',
                        '!<%= config.dist %>/.git*'
                    ]
                }]
            },
            server: {
                files: [{
                    dot: true,
                    src: ['.tmp', '.sass-cache']
                }]
            },
            angular: {
                files: [{
                    dot: true,
                    src: [
                        '<%= config.app %>/angularjs'
                    ]
                }]
            }
        },

        // Make sure code styles are up to par and there are no obvious mistakes
        eslint: {
            target: [
                'Gruntfile.js',
                '<%= config.app %>/scripts/{,*/}*.js',
                '<%= config.app %>/angularjs/**/*.js',
                '!<%= config.app %>/scripts/vendor/*',
                'test/spec/{,*/}*.js'
            ]
        },

        // Mocha testing framework configuration options
        mocha: {
            all: {
                options: {
                    run: true,
                    urls: ['http://<%= browserSync.test.options.host %>:<%= browserSync.test.options.port %>/index.html']
                }
            }
        },

        // Compiles ES6 with Babel
        babel: {
            options: {
                sourceMap: false
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= config.app %>/**/',
                    src: '{,*/}*.js',
                    dest: '.tmp/scripts',
                    ext: '.js'
                }]
            },
            test: {
                files: [{
                    expand: true,
                    cwd: 'test/spec',
                    src: '{,*/}*.js',
                    dest: '.tmp/spec',
                    ext: '.js'
                }]
            }
        },

        // Compiles Sass to CSS and generates necessary files if requested
        compass: {
            options: {
                cssDir: '.tmp/styles',
                sassDir: '<%= config.app %>/styles',
                imagesDir: '<%= config.app %>/images',
                fontsDir: '<%= config.app %>/fonts',
                generatedImagesDir: '<%= config.app %>/images/generated',
                generatedImagesPath: '<%= config.app %>/images/generated',
                javascriptsDir: '<%= config.app %>/scripts',
                httpGeneratedImagesPath: '../images/generated',
                httpImagesPath: '../images',
                httpFontsPath: '../fonts',
                relativeAssets: false,
                assetCacheBuster: false,
                noLineComments: false
            },
            dist: {
                options: {
                    generatedImagesDir: '<%= config.dist %>/images/generated'
                }
            },
            server: {
                options: {
                    debugInfo: false
                }
            }
        },

        postcss: {
            options: {
                map: true,
                processors: [
                    // Add vendor prefixed styles
                    require('autoprefixer')({
                        browsers: ['> 1%', 'last 2 versions', 'Firefox ESR']
                    })
                ]
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: '.tmp/styles/',
                    src: '{,*/}*.css',
                    dest: '.tmp/styles/'
                }]
            }
        },

        // Automatically inject Bower components into the HTML file
        wiredep: {
            app: {
                src: [
                    '<%= config.app %>/index.html',
                    '<%= config.app %>/commom/head-bundle.tpl',
                    '<%= config.app %>/commom/script-bundle.tpl'
                ],
                exclude: []
            },
            sass: {
                src: ['<%= config.app %>/styles/{,*/}*.{scss,sass}']
            }
        },

        // Renames files for browser caching purposes
        filerev: {
            dist: {
                src: [
                    '<%= config.dist %>/scripts/{,*/}*.js',
                    '<%= config.dist %>/styles/{,*/}*.css',
                    '<%= config.dist %>/images/{,*/}*.*',
                    '<%= config.dist %>/styles/fonts/{,*/}*.*',
                    '<%= config.dist %>/*.{ico,png}'
                ]
            }
        },

        // Reads HTML for usemin blocks to enable smart builds that automatically
        // concat, minify and revision files. Creates configurations in memory so
        // additional tasks can operate on them
        useminPrepare: {
            options: {
                dest: '<%= config.dist %>'
            },
            html: [
                '<%= config.app %>/commom/head-bundle.tpl',
                '<%= config.app %>/commom/script-bundle.tpl'
            ]
        },

        // Performs rewrites based on rev and the useminPrepare configuration
        usemin: {
            options: {
                assetsDirs: [
                    '<%= config.dist %>',
                    '<%= config.dist %>/images',
                    '<%= config.dist %>/styles'
                ]
            },
            html: ['<%= config.dist %>/{,*/}*.html'],
            css: ['<%= config.dist %>/styles/{,*/}*.css']
        },

        // The following *-min tasks produce minified files in the dist folder
        svgmin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= config.app %>/images',
                    src: '{,*/}*.svg',
                    dest: '<%= config.dist %>/images'
                }]
            }
        },

        htmlmin: {
            dist: {
                options: {
                    collapseBooleanAttributes: true,
                    collapseWhitespace: true,
                    conservativeCollapse: true,
                    removeAttributeQuotes: true,
                    removeCommentsFromCDATA: true,
                    removeEmptyAttributes: true,
                    removeOptionalTags: true,
                    // true would impact styles with attribute selectors
                    removeRedundantAttributes: false,
                    useShortDoctype: true
                },
                files: [{
                    expand: true,
                    cwd: '<%= config.dist %>',
                    src: '{,*/}*.html',
                    dest: '<%= config.dist %>'
                }]
            }
        },

        // By default, your `index.html`'s <!-- Usemin block --> will take care
        // of minification. These next options are pre-configured if you do not
        // wish to use the Usemin blocks.
        // cssmin: {
        //   dist: {
        //     files: {
        //       '<%= config.dist %>/styles/main.css': [
        //         '.tmp/styles/{,*/}*.css',
        //         '<%= config.app %>/styles/{,*/}*.css'
        //       ]
        //     }
        //   }
        // },
        // uglify: {
        //   dist: {
        //     files: {
        //       '<%= config.dist %>/scripts/scripts.js': [
        //         '<%= config.dist %>/scripts/scripts.js'
        //       ]
        //     }
        //   }
        // },
        // concat: {
        //   dist: {}
        // },

        // Copies remaining files to places other tasks can use
        copy: {
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= config.app %>',
                    dest: '<%= config.dist %>',
                    src: [
                        '*.{ico,png,txt}',
                        '.htaccess',
                        'web.config',
                        'sitemap.xml',
                        '{,*/}*.html',
                        'fonts/{,*/}*.*'
                    ]
                }, {
                    expand: true,
                    dot: true,
                    cwd: '<%= config.app %>/data/',
                    dest: '<%= config.dist %>/data/',
                    src: '**'
                }, {
                    expand: true,
                    dot: true,
                    cwd: '<%= config.app %>/scripts/libs/',
                    dest: '<%= config.dist %>/scripts/libs/',
                    src: '**'
                }, {
                    expand: true,
                    dot: true,
                    cwd: '<%= config.app %>/scripts/',
                    dest: '<%= config.dist %>/scripts/',
                    src: ['variables.js', 'languages.js']
                }, {
                    expand: true,
                    dot: true,
                    cwd: '<%= config.app %>/images/',
                    dest: '<%= config.dist %>/images/',
                    src: '**'
                }, {
                    expand: true,
                    dot: true,
                    cwd: '<%= config.app %>/angularjs/',
                    dest: '<%= config.dist %>/angularjs/',
                    src: '**/*.tpl'
                }]
            },
            server: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= config.app %>',
                    dest: '.tmp/',
                    src: [
                        'styles/{,*/}*.css',
                        'fonts/{,*/}*.*'
                    ]
                }]
            }
        },

        // Run some tasks in parallel to speed up build process
        concurrent: {
            server: [
                'simple_include:server',
                //'typescript',
                //'jade:server',
                'babel:dist',
                'compass:server'
            ],
            test: [
                'babel'
            ],
            dist: [
                //'typescript',
                //'jade:dist',
                'babel',
                'compass'
            ]
        }
    });


    grunt.registerTask('serve', 'start the server and preview your app', function(target) {

        if (target === 'dist') {
            return grunt.task.run(['build', 'browserSync:dist']);
        }

        grunt.task.run([
            'clean:server',
            'wiredep',
            'concurrent:server',
            'postcss',
            'browserSync:livereload',
            'watch'
        ]);
    });

    grunt.registerTask('server', function(target) {
        grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
        grunt.task.run([target ? ('serve:' + target) : 'serve']);
    });

    grunt.registerTask('test', function(target) {
        if (target !== 'watch') {
            grunt.task.run([
                'clean:server',
                'concurrent:test',
                'postcss'
            ]);
        }

        grunt.task.run([
            'browserSync:test',
            'mocha'
        ]);
    });

    grunt.registerTask('build', [
        'clean:dist',
        'wiredep',
        'useminPrepare',
        'concurrent:dist',
        'postcss',
        'concat',
        'ngAnnotate',
        'cssmin',
        'uglify',
        'copy:dist',
        'simple_include:dist',
        'usemin'
    ]);

    grunt.registerTask('clear', [
        'clean:server',
        'clean:dist'
    ]);

    grunt.registerTask('clearng', [
        'bzstrip::angular',
        'clean:angular',
        'shell::rmangular'
    ]);

    grunt.registerTask('clearrecaptcha', [
        'bzstrip::recaptcha'
    ]);

    grunt.registerTask('clearyoutube', [
        'bzstrip::youtube'
    ]);

    grunt.registerTask('cleargmap', [
        'bzstrip::gmap'
    ]);

    grunt.registerTask('clearga', [
        'bzstrip::ga',
        'shell::rmga'
    ]);

    grunt.registerTask('android', [
        'shell::android'
    ]);

    grunt.registerTask('desktop', [
        'shell::desktop'
    ]);

    grunt.registerTask('ios', [
        'shell::ios'
    ]);

    grunt.registerTask('e2e', [
        'shell::e2e'
    ]);

    grunt.registerTask('unit', [
        'shell::unit'
    ]);

    grunt.registerTask('zip', [
        'build',
        'compress'
    ]);

    grunt.registerTask('default', [
        'newer:eslint',
        'test',
        'build'
    ]);
};