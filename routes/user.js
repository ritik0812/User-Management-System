// Express
const express = require('express');

// Routes
const route = express.Router();

// Create Table
const createTable = require('../model/user-schema');

// View & Find Data
const view = require('../controllers/view');
const find = require('../controllers/find');

// Insert Data
const insert = require('../controllers/insert');

// Edit Data
const edit = require('../controllers/edit');

// Delete Data
const deletes = require('../controllers/delete');


/* CREATE, FIND, UPDATE, DELETE */
route.get('/createTable', createTable.createTable);

// Insert
route.get('/addUser', insert.getInsertData);
route.post('/addUser', insert.postInsertData);

// View & Find
route.get('/', view.viewData);
route.get('/viewUser', view.viewUser);
route.post('/findData', find.findData);


// Edit
route.get('/editUser', edit.getEditData);
route.post('/editUser', edit.postEditData);

// Delete
route.get('/deleteUser', deletes.deleteData);


// Invalid Route
route.get('**', (req, res) => {
    res.redirect('/');
})

// Exporting Route
module.exports = route;
