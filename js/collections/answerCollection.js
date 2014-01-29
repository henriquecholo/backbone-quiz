define(['underscore', 'backbone', 'answerModel', 'localStorage'],

function (_, Backbone, AnswerModel, LocalStorage) {

    var AnswerCollection = Backbone.Collection.extend({
        model: AnswerModel,
        url: "/js/data/answers-collection.json",
        localStorage : new LocalStorage("QuizCollection"),
        refreshFromServer : function(options) {
            return Backbone.ajaxSync('read', this, options);
        },
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

    return AnswerCollection;
});