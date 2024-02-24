const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "user-management-system"
})

connection.connect((err) => {
    if (err) {
        console.error('Error connecting: ' + err.stack);
        throw err;
    }
    console.log("Connection Successfull " + connection.threadId);
});

module.exports = connection;