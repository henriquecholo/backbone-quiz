require(['collections/quizCollection', 'text!templates/quizTemplate.tpl'], function(QuizCollection, Template){
    var EmailView = Backbone.View.extend({
    	el: '#quizForm',
       	template: _.template(Template),
       	initialize: function(){
        	this.quizCollection = new QuizCollection();
           	this.quizCollection.on('reset', this.render, this);
           	this.quizCollection.fetch():
       	},
       	render: function(){
        	this.$el.html(this.template(QuizCollection.toJSON()));
        	return this;
       	}
 
    });
    return EmailView;
})