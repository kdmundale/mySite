// Load Node modules
const express = require('express');
const path = require('path');
const routes = require('./routes');
const ejs = require('ejs');
// Initialise Express
const app = express();
// Render static files
app.use(express.static(__dirname + "/public"));
// Set the view engine to ejs
app.set('view engine', 'ejs');

app.use("/", routes);
// Port website will run on
app.listen(8080);
