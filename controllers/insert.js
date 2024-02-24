const connection = require('../db/conn');

module.exports.getInsertData = (req, res) => {
    res.render('addUser');
}

module.exports.postInsertData = (req, res) => {

    const first_name = req.body.first_name;
    const last_name = req.body.last_name;
    const email = req.body.email;
    const phone = req.body.phone;
    const comments = req.body.comment;

    const query = "INSERT INTO USERS( first_name, last_name, email, phone, comments) VALUES(? , ? , ? , ?, ?)"

    connection.query(query, [first_name, last_name, email, phone, comments], (err, result) => {
        if (err) {
            res.render('addUser', {
                alert: "Not Valid Data"
            })
        }

        res.redirect('/');
    })

}