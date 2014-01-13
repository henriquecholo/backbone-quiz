define(['jquery', 'backbone', 'underscore', 'marionette', 'bootstrap',
        'quizModel', 'localStorage'],

    function($, Backbone, _, Marionette, Bootstrap, QuizModel, LocalStorage){
        var QuizCollection = Backbone.Collection.extend({
            url: "/js/data/quiz-collection.json",
            localStorage : new LocalStorage("QuizCollection"),
            refreshFromServer : function(options) {
                return Backbone.ajaxSync('read', this, options);
            },
            model: QuizModel,
            completed: function() {
              return this.where({completed: true});
            },
            remaining: function() {
              return this.where({completed: false});
            },
            comparator: function(model){
              return model.get('timestamp');
            }
        });
        return QuizCollection;
    }
);