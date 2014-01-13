define(['jquery', 'backbone', 'underscore', 'marionette', 'bootstrap',
		'quizCollection', 'text!templates/quizTemplate.html'],

	function($, Backbone, _, Marionette, Bootstrap, QuizCollection, Template){
	    var QuizView = Backbone.View.extend({
	    	initialize: function(){
	            this.collection = new QuizCollection();
	            var collection = this.collection;
				collection.refreshFromServer({success: function(freshData) {
				    collection.reset(freshData);
				    collection.each(function(model) {
				        model.save();
				    });
				}});
		        this.render();
	           	//this.quizCollection.fetch();
	        },
	    	el: '#quiz',
	       	template: _.template(Template),
	       	render: function(){
	       		this.$el.html(this.template(this.collection.toJSON()));
	       	},
	       	events: {
	       		"click .list-group-item": 'checkActiveAnswers'
	       	},
	       	checkActiveAnswers: function (e){
	       		e.preventDefault();
	       		var element = this.$(e.currentTarget);
	       		if(element.hasClass('active')) {
		        	element.removeClass('active');
				}
				else {
					var activesItems = element.parent().children('.active');
					var listGroupActive = activesItems ? activesItems.length : 0;
					if(listGroupActive >= 3){
						alert("Can only select 3 options.");
					}
					else {
						element.addClass('active');
					}
				}
	       	}
	    });
	    return QuizView;
	}
);