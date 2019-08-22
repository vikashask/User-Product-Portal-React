let mongoose = require('mongoose');
let Schema = mongoose.Schema;


let QuestionSchema = new Schema({
    q_type: { type: String ,default:'o'},
    q_level: { type: String, default:'0' },
    question: { type: String, required: true },
    a: { type: String, required: true },
    b: { type: String },
    c: { type: String },
    d: { type: String },
    e: { type: String },
    answer: { type: String, required: true },
}, {
    versionKey: false
});

module.exports = mongoose.model('question', QuestionSchema);
