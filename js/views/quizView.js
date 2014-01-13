define(['jquery', 'backbone', 'underscore', 'marionette', 'bootstrap',
		'quizCollection', 'text!templates/quizTemplate.html'], 
	
	function($, Backbone, _, Marionette, Bootstrap, QuizCollection, Template){
	    var EmailView = Backbone.View.extend({
	    	initialize: function(){
	            this.render();
	        },
	    	el: '#quizForm',
	       	template: _.template(Template),
	       	initialize: function(){
	        	this.quizCollection = new QuizCollection();
	           	this.quizCollection.on('reset', this.render, this);
	           	this.quizCollection.fetch();
	       	},
	       	render: function(){
	       		this.$el.html(this.template($('#quiz-template').html(), QuizCollection.toJSON()));
	        	return this;
	       	}
	 
	    });
	    return EmailView;
	}
);