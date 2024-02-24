const connection = require('../db/conn');

// View User
module.exports.viewData = (req, res) => {

    const query = 'Select * from users';

    connection.query(query, (err, result) => {
        if (err) {
            throw err;
        }

        let removedUser = req.query.removed;

        res.render('home', {
            result: result,
            removedUser: removedUser
        });
    })
}


module.exports.viewUser = (req, res) => {

    var id = req.query.id;

    const query = 'Select * from users where id = "' + id + '"';

    connection.query(query, (err, result) => {
        if (err) {
            throw err;
        }

        res.render('viewUser', {
            result: result
        });
    })
}
