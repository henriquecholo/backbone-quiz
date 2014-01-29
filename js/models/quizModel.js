define(['jquery', 'backbone', 'underscore', 'marionette', 'bootstrap'],

	function($, Backbone, _, Marionette, Bootstrap){
		var QuizModel = Backbone.Model.extend({
	    	defaults: {
		      question: "",
		      option1: "",
		      option2: "",
		      option3: "",
		      option4: "",
		      option5: "",
		      timestamp: 0,
		      completed: false,
	          answersFromUser: [],
	          correctPercentage: 0
		    },
		    validate: function(attrs) {
		      if ( _.isEmpty(attrs.question) ) {
		        return "Missing Question";
		      }
		    }
	    });
	    return QuizModel;
	}
);