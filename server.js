// Dot Env
require('dotenv').config();

// Express
const express = require('express');

// App
const app = express();

// HBS
const hbs = require('hbs');

// Body Parser
const bodyParser = require('body-parser');

// DB
require('./db/conn')

// Path
const path = require('path');

// Partials Path
const partialsPath = path.join(__dirname, './views/partials');

// Router
const Router = require('./routes/user');

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
/* Parse data object will contain key-value pairs, where the value can be string when extended:false, or any type when extended:true */

// Parse application/json
app.use(bodyParser.json());

// Static Files
app.use(express.static('public'));

// Template engine
app.set('view engine', 'hbs');
hbs.registerPartials(partialsPath);

// Routing
app.use(Router);

// Listen
app.listen("80", () => {
    console.log("Server has started");
})