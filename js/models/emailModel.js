define(['jquery', 'backbone', 'underscore', 'marionette', 'bootstrap'], 

	function($, Backbone, _, Marionette, Bootstrap){
	    var emailModel = Backbone.Model.extend({
	    	defaults: {
		      email: "",
		      password: "",
		      timestamp: 0,
		      completed: false
		    },
		    validate: function(attrs) {
		      if ( _.isEmpty(attrs.email) ) {
		        return "Missing Email";
		      }
		      if ( _.isEmpty(attrs.password) ) {
		        return "Missing Password";
		      }
		    }
	    });
	    return emailModel;
	}
);