define(['jquery', 'underscore', 'backbone', 'text!templates/resultTemplate.html', 'answerCollection'],

function ($, _, Backbone, Template, AnswerCollection) {

    var ResultView = Backbone.View.extend({
        template: _.template(Template),
        initialize: function(){
            this.quizCollection = new Backbone.LocalStorage("QuizCollection");
            this.answerCollection = new AnswerCollection();
            var answerCollection = this.answerCollection,
                quizCollection = this.quizCollection,
                self = this;
            answerCollection.refreshFromServer({success: function(freshData) {
                answerCollection.reset(freshData);
            }, error: function(){
                console.log("Error on refreshFromServer ajax call");
            }}).done(function() {
                var quizAmount = 0;
                answerCollection.each(function(answerModel) {
                    var quizModel = quizCollection.find({id: answerModel.attributes.question});
                    var index = 0,
                        optionString = '',
                        rightFromUser = 0;
                    while(index < 5) {
                        if(quizModel.answersFromUser[index] === answerModel.values()[index + 1]) {
                            rightFromUser++;
                        }
                        index++;
                    }
                    quizModel.correctPercentage = (100 * rightFromUser) / 5;
                    quizAmount += quizModel.correctPercentage;
                    localStorage.setItem("QuizCollection-" + answerModel.attributes.question, JSON.stringify(quizModel));
                });
                self.render(quizCollection, quizAmount / quizCollection.records.length);
            });
        },
        el: '#result',
        render: function(collection, averageRate){
            this.$el.html(this.template({collection: collection.findAll(), AverageRate: averageRate}));
        },
    });

    return ResultView;
});