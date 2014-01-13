(function(){
	var paths = {
			jquery: 		"libraries/jquery-2.0.3",
			backbone: 		"libraries/backbone",
			underscore: 	"libraries/underscore",
			bootstrap: 		"libraries/bootstrap",
			marionette: 	"libraries/backbone.marionette",
			router: 		"router",
			emailView: 		"views/emailView",
			emailModel: 	"models/emailModel",
			quizView: 		"views/quizView",
			quizCollection: "collections/quizCollection",
			quizModel: 		"models/quizModel"
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
	        }
		},
		dependencies = 
			['jquery', 'backbone', 'underscore', 'bootstrap', 'marionette', 'router'],
		factory = function($, Backbone, _, Bootstrap, Marionette, Router) {
			new Router().initialize();
		};
	
	require.config({
		baseUrl: 'js',
		paths: paths,
		shim: shim
	});

	//load libraries dependencies
	require(dependencies, factory);
	
	//Load Models
	var modelDependencies = [],
		modelFactory = function(QuizModel, EmailModel){
	};
	require(modelDependencies, modelFactory);

	//Load Views
	var viewDependencies = ['emailView', 'quizView'],
		viewFactory = function(EmailView, QuizView){
	};
	require(viewDependencies, viewFactory);

	//Load Collections
	var collectionDependencies = ['quizCollection'],
		collectionFactory = function(QuizCollection){
	};
	require(collectionDependencies, collectionFactory);

})();