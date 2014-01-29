define(['underscore', 'backbone'],

function (_, Backbone) {

    var AnswerModel = Backbone.Model.extend({
        defaults: {
            question: 0,
            option1: "",
            option2: "",
            option3: "",
            option4: "",
            option5: "",
        }
    });

    return AnswerModel;
});