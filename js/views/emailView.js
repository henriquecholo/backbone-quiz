define(['jquery', 'backbone', 'underscore', 'marionette', 'bootstrap',
		'text!templates/emailTemplate.html'],

	function($, Backbone, _, Marionette, Bootstrap, Template){
	    var emailView = Backbone.View.extend({
	    	initialize: function(){
	            this.render();
	        },
	    	el: '#emailForm',
	       	template: _.template(Template),
	       	render: function(){
	        	this.$el.html(this.template($('#email-template').html()));
	        	return this;
	       	}
	 
	    });

	    $('.list-group-item').on('click', function(e){
			if($(this).hasClass('active')) {
		        $(this).removeClass('active');
			}
			else {
				var activesItems = $(this).parent().children('.active');
				var listGroupActive = activesItems ? activesItems.length : 0;
				if(listGroupActive >= 3){
					alert("Can only select 3 options.");
				}
				else {
					$(this).addClass('active');
				}
			}
			e.preventDefault();
		});

	    return emailView;
	}
);

