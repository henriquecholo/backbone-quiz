require(['text!templates/emailTemplate.tpl'], function(Template){
    var emailView = Backbone.View.extend({
    	el: '#emailForm',
       	template: _.template(Template),
       	render: function(){
        	this.$el.html(this.template($('#email-template').html()));
        	return this;
       	}
 
    });
    return emailView;
})