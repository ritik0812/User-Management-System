const connection = require('../db/conn');

var id = 0;

module.exports.getEditData = (req, res) => {

    id = req.query.id;

    const query = 'Select * from users where id = "' + parseInt(id) + '"';

    connection.query(query, (err, results, fields) => {

        if (err) {
            throw err;
        }

        res.render('editUser', {
            results: results
        });
    })

}

module.exports.postEditData = (req, res) => {

    const first_name = req.body.first_name;
    const last_name = req.body.last_name;
    const email = req.body.email;
    const phone = req.body.phone;
    const comments = req.body.comment;

    const query = 'Update users set first_name = ?, last_name = ?, email = ?, phone = ?, comments = ? where id = "' + id + '"';

    let data = [first_name, last_name, email, phone, comments];

    connection.query(query, data, (err, results, fields) => {
        if (err)
            throw err;

        console.log('Rows affected:', results.affectedRows);
        res.redirect('/');
    })
}