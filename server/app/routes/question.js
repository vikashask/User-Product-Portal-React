let Question = require('../models/question');
/*
 * GET /User route to retrieve all the Users.
 */
function getQuestions(req, res) {
    try {
        //Query the DB and if no errors, send all the Users
        let query = Question.find({});
        query.exec((err, Question) => {
            if (err) res.send(err);
            //If no errors, send them back to the client
            res.json(Question);
        });
    } catch (e) {
        res.send({
            error: e,
        });
    }

}

let postQuestion = async (req, res) => {
    try {
        let QuestionData = await Question.findOne({
            name: req.body.question,
        });
        if (QuestionData) {
            res.send({
                message: "Question already exist with this name",
            });
        } else {
            // create new user
            let newQuestion = new Question(req.body);
            // saveing heres
            newQuestion.save(
                (err, Question) => {
                    if (err) {
                        res.send(err);
                    } else {
                        res.send({
                            message: "Question addded",
                            Question
                        });
                    }
                }
            );
        }
    } catch (e) {
        console.log("error", e);
        res.send({
            error: e,
        });
    }

}


module.exports = {
    getQuestions,
    postQuestion,
    editQuestion,
    deleteQuestion,
    Questionbyid
};