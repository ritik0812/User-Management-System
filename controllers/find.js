const connection = require('../db/conn');

module.exports.findData = (req, res) => {

    const search = req.body.search;
    const query = 'Select * from users where first_name like ? OR last_name like ? OR email like ? OR phone like ?';

    connection.query(query, [search, search, search, search], (err, result) => {
        if (err) {
            throw err;
        }
        res.render('home', {
            result: result
        });

    });
}   