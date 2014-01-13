(function(){
	var paths = {
			jquery: 		"libraries/jquery-2.0.3",
			backbone: 		"libraries/backbone",
			underscore: 	"libraries/underscore",
			bootstrap: 		"libraries/bootstrap",
			marionette: 	"libraries/backbone.marionette",
			localStorage: 	"libraries/backbone.localStorage",
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
	        'localStorage':
			{
	            deps: ['backbone'],
	            exports: 'LocalStorage'
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
			['jquery', 'backbone', 'localStorage', 'underscore', 'bootstrap', 'marionette', 'router'],
		factory = function($, Backbone, LocalStorage, _, Bootstrap, Marionette, Router) {
		},
		config = {
		    text: {
		      useXhr: function (url, protocol, hostname, port) {
		        // allow cross-domain requests
		        return true;
		      }
		    }
		};

	require.config({
		baseUrl: 'js',
		paths: paths,
		shim: shim,
		config: config
	});

	//load libraries dependencies
	require(dependencies, factory);

	//Load Models
	var modelDependencies = ['quizModel', 'emailModel'],
		modelFactory = function(QuizModel, EmailModel){
	};
	require(modelDependencies, modelFactory);

	//Load Views
	var viewDependencies = ['emailView', 'quizView'],
		viewFactory = function(EmailView, QuizView){
			new EmailView;
			new QuizView;
	};
	require(viewDependencies, viewFactory);

	//Load Collections
	var collectionDependencies = ['quizCollection'],
		collectionFactory = function(QuizCollection){
			//new QuizCollection;
	};
	require(collectionDependencies, collectionFactory);

})();