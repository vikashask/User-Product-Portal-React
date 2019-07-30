let User = require('../models/user');
/*
 * GET /User route to retrieve all the Users.
 */
function getUsers(req, res) {
    try {
        //Query the DB and if no errors, send all the Users
        let query = User.find({});
        query.exec((err, Users) => {
            if (err) res.send(err);
            //If no errors, send them back to the client
            res.json(Users);
        });
    } catch (e) {
        res.send({
            error: e,
        });
    }

}

let userbyid = async (req, res) => {
    try {
        console.log("req.params.id", req.params);

        if (req.params.id) {
            let userData = await User.findOne({
                _id: req.params.id,
            }, {
                password: 0
            });
            if (userData) {
                res.send({
                    data: userData,
                });
            }
        } else {
            let userData = await User.find();
            if (userData) {
                res.send({
                    data: userData,
                });
            }
        }
    } catch (e) {
        console.log("error", e);
        res.send({
            error: e,
        });
    }
}

module.exports = {
    getUsers,
    login,
    register,
    postUser,
    editUser,
    deleteUser,
    userbyid
};