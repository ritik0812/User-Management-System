const connection = require('../db/conn');

const query = 'CREATE TABLE users (id int auto_increment not null unique, first_name varchar(50) not null, 	last_name varchar(50) not null,email varchar(50) not null, phone varchar(50) not null, comments text not null, status varchar(10) not null default "active", Primary Key (id))';

module.exports.createTable = (req, res) => {
	connection.query(query, (err, result) => {
		if (err) {
			throw err;
		}

		console.log('Table Created Successfully');
		res.redirect('/');
	})
}


