(function(){
	var paths = {
			jquery: 		"libraries/jquery-2.0.3",
			backbone: 		"libraries/backbone",
			underscore: 	"libraries/underscore",
			bootstrap: 		"libraries/bootstrap",
			marionette: 	"libraries/backbone.marionette",
			router: 		"router",
			emailView: 		"views/emailView",
			quizView: 		"views/quizView",
			quizCollection: "colections/quizCollection"
		},
		shim = {
	        'bootstrap': 
	        {
	            deps: ['jquery'],
	            exports: 'Bootstrap'
	        },
	        'backbone': 
			{
	            deps: ['underscore', 'jquery'],
	            exports: 'Backbone'
	        },
	        'marionette': 
			{
	            deps: ['underscore', 'jquery', 'backbone'],
	            exports: 'Marionette'
	        },
	        'underscore': 
	        {
	            exports: '_'
	        },
	        'router': 
	        {
	        	deps:['marionette'],
	            exports: 'Router'
	        },
	        'emailView': 
	        {
	        	deps:['marionette'],
	            exports: 'EmailView'
	        },
	        'quizView': 
	        {
	        	deps:['quizCollection'],
	            exports: 'QuizView'
	        },
	        'quizCollection': 
	        {
	        	deps:['marionette'],
	            exports: 'QuizCollection'
	        }
		},
		dependencies = 
			['jquery', 'backbone', 'underscore', 'bootstrap', 'marionette', 'router'],
		factory = function($, Backbone) {
			
		};
	
	require.config({ 
		paths: paths,
		shim: shim
	});

	//load libraries dependencies
	require(dependencies, factory);
	
	//Load Views
	var viewDependencies = ['views/emailView', 'views/quizView'],
		viewFactory = function(emailView, quizView){
	};
	require(viewDependencies, viewFactory);

	//Load Collections
	var collectionDependencies = ['collections/quizCollection'],
		collectionFactory = function(quizCollection){
	};
	require(collectionDependencies, collectionFactory);

})();