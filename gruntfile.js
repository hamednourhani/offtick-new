module.exports = function(grunt) {
	
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks( 'grunt-wp-i18n' );
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		
			

		makepot: {
	        target: {
	            options: {
	                cwd: '',
	                domainPath: '/languages',
	                mainFile: 'index.php',
	                potFilename: 'itstart.pot',
	                processPot: function( pot, options ) {
	                    pot.headers['report-msgid-bugs-to'] = 'http://itstar.ir/contact-us';
	                    pot.headers['language-team'] = 'iTstar <info@itstar.ir>';
	                    return pot;
	                },
	                type: 'wp-theme'
	            }
	        }
	    },//makepot


		jshint: {
		    files: [
		        'js/**/*.js',
		        'js'
		    ],//files
		    options: {
		        expr: true,
		        globals: {
		            jQuery: true,
		            console: true,
		            module: true,
		            document: true
		        }
		    }//options
		},//jshint

		uglify: {
		    dist: {
		        options: {
		            banner: '/*! <%= pkg.name %> <%= pkg.version %> script.min.js <%= grunt.template.today("yyyy-mm-dd h:MM:ss TT") %> */\n',
		            report: 'gzip'
		        },//options
		        files: {
		            'js/script.min.js' : [
		                'js/components/*.js'
		             ]
		        }//files
		    },//dist
		    dev: {
		        options: {
		            banner: '/*! <%= pkg.name %> <%= pkg.version %> script.js <%= grunt.template.today("yyyy-mm-dd h:MM:ss TT") %> */\n',
		            beautify: true,
		            compress: false,
		            mangle: false
		        },//options
		        files: {
		            'js/script.js' : [
		                'js/components/*.js'
		            ]
		        }//files
		    }//dev
		},//uglify
		
		compass: {
		   dist: {
		        options: {
		            //banner: '/*! <%= pkg.name %> <%= pkg.version %> style.min.css <%= grunt.template.today("yyyy-mm-dd h:MM:ss TT") %> */\n',
		          	environment: 'production',
		           config : 'config.rb'
		              	
		        }
		        
		    },//dist
		    dev: {
		        options: {
		           //banner: '/*! <%= pkg.name %> <%= pkg.version %> style.css <%= grunt.template.today("yyyy-mm-dd h:MM:ss TT") %> */\n',
		           config : 'config.rb'
		          
		        }
		    }//dev
		},//compass

		copy: {
		     
	      css: {
	        files: [
	          {
	            expand: true, 
	            cwd: 'css/temp/', 
	            src: ['*.css'], 
	            dest: 'css', 
	            rename: function(dest, src) {
	              return dest +'/'+ src.substring(0, src.indexOf('.')) + '.min.css';
	            }
	          }]
	      },
		   readme: {
		        src: 'readme.txt',
		        dest: 'README.md'
		    }//dist
		},//copy

		
		clean: {
		  build: {
		    src: ["css/temp/**/*.css"]
		  }
		},//clean



		img: {
         
	        // recursive extension filter with output path 
	        task1: {
	            src: ['images/**/*.png','images/**/*.jpg'],
	            dest: 'images/opt'
	        }//task1
	 
	    },//img


		watch: {
			options : { livereload : true },
      // 		scripts :{
      // 			files: ['js/*.js'],
      // 			tasks: ['jshint','uglify:dev','uglify:dist']
    		// },//scripts
    		html : {
    			files : ['*.html']
    		},//html
    		sass : {
    			files : ['css/sass/**/*.scss'],
    			tasks : ['compass:dev','compass:dist','copy:css','clean']
    		},

    	}//watch
  
		
	});
	
	grunt.registerTask('default', 'watch');
}