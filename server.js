// Require the Express Module
var express = require('express');
// Create an Express App
var app = express();
// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');
// Integrate body-parser with our App

var session = require('express-session');
app.use(session({secret: 'codingdojorocks'}));  



app.use(function(request, response, next){
    // if there's a flash message in the session request, make it available in the response, then delete it
    response.locals.sessionFlash = request.session.sessionFlash;
    delete request.session.sessionFlash;
    next();
});

var Sequelize = require('sequelize');
// var sequelize = new Sequelize('database', 'username', 'password');
// var sequelize = new Sequelize('mysql://Weitzmam:i229rorY!@aa1o6qlyflb1dy1.ct0hnq2ct2gz.us-east-1.rds.amazonaws.com:3306/hacksqltest');
var sequelize = new Sequelize('mysql://user:@localhost/hacksqltest');

var models = require("./server/models");


app.use(bodyParser.urlencoded({ extended: true }));
// Require path
var path = require('path');
// Setting our Static Folder Directory
app.use(express.static(path.join(__dirname, './static')));
// Setting our Views Folder Directory
app.set('views', path.join(__dirname, './views'));
// Setting our View Engine set to EJS
app.set('view engine', 'ejs');


var routes_setter = require('./server/config/routes.js');
routes_setter(app);

// Setting our Server to Listen on Port: 8000
var port = process.env.PORT || 8000;

app.listen(port, function() {
 console.log("Listen on 8000");
})

models.sequelize.sync().then(function () {
  console.log('synced')
  // app.listen(port);
  // app.on('error', onError);
  // app.on('listening', onListening);
});