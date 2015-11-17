module.exports = function(grunt) {

// 1. All configuration goes here
grunt.initConfig({
  pkg: grunt.file.readJSON('package.json'),

  concat: {
      // 2. Configuration for concatinating files goes here.
		dist: {
			src: [
				'js/libs/*.js', // All JS in the libs folder
				'js/global.js' // This specific file
			],
			dest: 'js/build/production.js',
		}
        },

	uglify: {
		build: {
			src: 'js/build/production.js',
			dest: 'js/build/production.min.js'
		}
	},

	imagemin: {
		dynamic: {
			files: [{
				expand: true,
				cwd: 'images/',
				src: ['**/*.{png,jpg,gif}'],
				dest: 'images/build/'
			}]
		}
	},

	watch: {
		options: {
				livereload: true,
		},
		scripts: {
			files: ['js/*.js'],
        		tasks: ['concat', 'uglify'],
        		options: {
            			spawn: false,
       				},
   		},
		css: {
    			files: ['css/*.scss'],
    			tasks: ['sass'],
    			options: {
        			spawn: false,
   			 }
		},
    styles: {
			files: ['main.css'],
			tasks: ['autoprefixer']
		}
	},

	sass: {
    		dist: {
        		options: {
            			style: 'compressed'
       			 },
        		files: {
            			'css/build/main.css': 'css/main.sass'
       			 }
    		}
	},
	autoprefixer: {
    options: {
        browsers: ['last 2 versions', 'ie 8', 'ie 9', '> 1%']
    },
    main: {
        expand: true,
        flatten: true,
        src: 'css/*.css',
        dest: 'dist/'
    }
	},
  haml: {
    dist: {
      files: {
        'index.html': 'index.haml',
      }
    }
  }
});

// 3. Where we tell Grunt we plan to use this plug-in.
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-imagemin');
grunt.loadNpmTasks('grunt-contrib-sass');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-autoprefixer');
grunt.loadNpmTasks('grunt-contrib-haml');

// 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
grunt.registerTask('default', ['concat', 'uglify', 'imagemin', 'sass', 'autoprefixer', 'haml']);

};
