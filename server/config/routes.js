// var mongoose = require('mongoose');
var squelize = require('sequelize');
// var User = mongoose.model('User');
var users = require('../controllers/users.js');
var stores = require('../controllers/stores.js');
var waterpoints = require('../controllers/waterpoints.js');
var yelper = require('../controllers/yelp.js');
// var stores = require('../controllers/stores.js');
module.exports = function(app){
	app.get("/", function (request, response){
    // hard-coded user data
	    // users.all(request,response)
	    // users.all(request,response);
	    response.render('index')
		    
	})

	app.get("/users",function (request,response){
		users.all(request,response)
	}),

	app.get("/dashboard", function(request,response) {
		console.log(request.url);
		locations = yelper.search(request,response);
		
		response.render('dashboard',{all_locations:locations});
	}),

	app.post("/users/create",function(request,response) {
		users.create(request,response)
	}),

	app.post("/providers/search",function(request,response) {
		response.json(request.body);
	}),

	app.post("/waterpoint/create",function(request,response){
		// response.json(request.body)
		waterpoints.create(request,response)
	})

	app.get("/waterpoint/new",function(request,response){
		response.render('new_water_point');
	})

	app.get("/ajax/stores",function(request,response){
		yelper.search(request,response);
	})
}
