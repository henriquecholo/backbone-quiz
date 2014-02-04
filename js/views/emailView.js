define(['jquery', 'backbone', 'underscore', 'marionette', 'bootstrap',
		'text!templates/emailTemplate.html', 'emailModel', 'quizView'],

	function($, Backbone, _, Marionette, Bootstrap, Template, EmailModel, QuizView){
	    var EmailView = Backbone.View.extend({
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
	       			localStorage.clear();
	       			this.model.save({email: emailText, password: passwordText, completed: true});
	       			this.$('#inputEmail').attr('disabled', true);
	       			this.$('#inputPassword').attr('disabled', true);
	       			this.$('#signIn').attr('disabled', true);
	       			var label = document.createElement("label");
				    label.textContent = "Email and password saved on localStorage.";
				    this.$('#signInForm').append(label);
				    Backbone.history.navigate('/quizz', { trigger: true });
	       		}
	       	}
	    });
	    return EmailView;
	}
);

