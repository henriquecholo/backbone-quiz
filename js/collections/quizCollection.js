define(['jquery', 'backbone', 'underscore', 'marionette', 'bootstrap',
        'quizModel'], 
      
    function($, Backbone, _, Marionette, Bootstrap, QuizModel){
        var quizCollection = Backbone.Collection.extend({
            url: "http://localhost"
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
        return quizCollection;
    }
);