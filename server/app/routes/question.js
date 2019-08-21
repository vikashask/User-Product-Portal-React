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


module.exports = {
    getQuestions,
    postQuestion,
    editQuestion,
    deleteQuestion,
    Questionbyid
};