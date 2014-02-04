/*global define*/
define(['answerCollection','resultView', 'backbone'],
    function (AnswerCollection, ResultView, Backbone) {
        'use strict';

        var ResultController = {
            action: function() {
                var quizCollection  = new Backbone.LocalStorage('QuizCollection'),
                    resultView;

                if(quizCollection) {
                    resultView = new ResultView({ collection: quizCollection});
                }

                return resultView;
            }
        };

        return ResultController;
    }
);