define(['jquery', 'backbone', 'underscore', 'marionette', 'bootstrap',
		'text!templates/emailTemplate.html', 'emailModel'],

	function($, Backbone, _, Marionette, Bootstrap, Template, EmailModel){
	    var EmailView = Backbone.View.extend({
	    	initialize: function(){
	    		this.model = new EmailModel();
	            this.render();
	        },
	    	el: '#email',
	       	template: _.template(Template),
	       	render: function(){
	        	this.$el.html(this.template(this.model.toJSON()));
	       	},
	       	events: {
	       		submit: 'save'
	       	},
	       	save: function(e) {
	       		e.preventDefault();
	       		var emailText = this.$('#inputEmail').val();
	       		var passwordText = this.$('#inputPassword').val();
	       		if(emailText === "" && passwordText === ""){
					alert("Please provide the email and password!");
	       		}
	       		else if(emailText === "") {
	       			alert("Please provide the email!");
	       		}
	       		else if(passwordText === "") {
	       			alert("Please provide the password!");
	       		}
	       		else {
	       			this.model.save({email: emailText, password: passwordText, completed: true});
	       		}
	       	}
	    });
	    return EmailView;
	}
);

