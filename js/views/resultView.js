define(['jquery', 'underscore', 'backbone', 'text!templates/resultTemplate.html', 'answerCollection'],

function ($, _, Backbone, Template, AnswerCollection) {

    var ResultView = Backbone.View.extend({
        template: _.template(Template),
        initialize: function(){
            var self = this,
                answerCollection = new AnswerCollection(),
                quizAmount = 0;
            this.answerCollection = answerCollection;
            this.answerCollection.refreshFromServer({success: function(freshData) {
                self.answerCollection.reset(freshData);
            }, error: function(){
                console.log('Error on refreshFromServer ajax call');
            }}).done(function() {
                self.answerCollection.each(function(answerModel) {
                    var quizModel = self.collection.find({id: answerModel.attributes.question});
                    var index = 0,
                        rightFromUser = 0;
                    while(index < 5) {
                        if(quizModel.answersFromUser[index] === answerModel.values()[index + 1]) {
                            rightFromUser++;
                        }
                        index++;
                    }
                    quizModel.correctPercentage = (100 * rightFromUser) / 5;
                    quizAmount += quizModel.correctPercentage;
                    localStorage.setItem('QuizCollection-' + answerModel.attributes.question, JSON.stringify(quizModel));
                });
                self.render(quizAmount / self.collection.records.length);
            });
        },
        render: function(averageRate){
            this.$el.html(this.template({collection: this.collection.findAll(), AverageRate: averageRate}));
        },
    });

    return ResultView;
});