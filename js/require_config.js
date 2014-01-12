(function(){
	var paths = {
			jquery: 	"libraries/jquery-2.0.3",
			backbone: 	"libraries/backbone",
			underscore: "libraries/underscore",
			bootstrap: 	"libraries/bootstrap",
			marionette: "libraries/backbone.marionette"
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
			['jquery', 'backbone', 'underscore', 'bootstrap', 'marionette'],
		factory = function($, Backbone) {
			
		};
	
	require.config({ 
		paths: paths,
		shim: shim
	});

	define(function(){
		var button = document.getElementById('loadDependecies');	
		button.onclick = function (){
			require(dependencies, factory);
		}
	});
})();