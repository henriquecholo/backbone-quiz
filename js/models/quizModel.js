define(['jquery', 'backbone', 'underscore', 'marionette', 'bootstrap'], 

	function($, Backbone, _, Marionette, Bootstrap){
		var quizModel = Backbone.Model.extend({
	    	defaults: {
		      question: "",
		      option1: "",
		      option2: "",
		      option3: "",
		      option4: "",
		      option5: "",
		      timestamp: 0,
		      completed: false
		    },
		    validate: function(attrs) {
		      if ( _.isEmpty(attrs.question) ) {
		        return "Missing Question";
		      }
		    }
	    });
	    return quizModel;
	}
);