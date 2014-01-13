define(['jquery', 'backbone', 'underscore', 'marionette', 'bootstrap', 'localStorage'],

	function($, Backbone, _, Marionette, Bootstrap, LocalStorage){
	    var EmailModel = Backbone.Model.extend({
	    	url: "/js/data/email-model.json",
            localStorage : new LocalStorage("EmailModel"),
	    	initialize: function() {
	    	},
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
	    return EmailModel;
	}
);