const connection = require('../db/conn');

module.exports.deleteData = (req, res) => {

    // Delete the row -- parseInt() --: Convert into number as data was in the form of string
    const data = 'delete from users where id = "' + parseInt(req.query.deleteRecord) + '"';

    // Update all the rows which are under it
    const query = 'Update users set id = id - 1 where id > "' + parseInt(req.query.deleteRecord) + '"';

    connection.query(data, (err, result, fields) => {
        if (err)
            throw err;

        connection.query(query, (err, result) => {
            if (err) {
                res.redirect('/');
            }

            let removedUser = encodeURIComponent('User deleted Successfully');
            res.redirect('/?removed=' + removedUser);
        })
    })
}



/*
UPDATE table_name
SET column_name = column_name - 1
WHERE column_name > deleted_value;
*/