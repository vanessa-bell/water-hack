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

	app.get('/stores/',function(request,response){
		response.render('waterStores',{lat:request.session.latitude,long:request.session.longitude});
	})

	app.get('/getinvolved/',function(request,response){
		response.render('getinvolved');
	})

	app.get("/users",function (request,response){
		users.all(request,response)
	}),

	app.get("/dashboard", function(request,response) {
		
		// locations = yelper.search(request,response);
		
		response.render('dashboard',{latitude:request.session.latitude,longitude:request.session.longitude});
	}),

	app.post("/users/create",function(request,response) {
		users.create(request,response)
	}),

	app.post("/dashboard/search",function(request,response) {
		request.session.city = request.body.city
		request.session.state = request.body.state
		request.session.latitude = request.body.latitude
		request.session.longitude = request.body.longitude
		response.render('dashboard',{city:request.session.city,state:request.session.state,latitude:request.session.latitude,longitude:request.session.longitude})

	}),

	app.post("/waterpoint/create",function(request,response){
		// response.json(request.body)

		waterpoints.create(request,response)
	})

	app.get("/waterpoint/new",function(request,response){
		console.log(request.session);
		
		response.render('new_water_point',{lat:request.session.latitude,long:request.session.longitude});
	})

	app.post("/ajax/stores",function(request,response){
		yelper.search(request,response);
	})

	app.post("/ajax/freePoints",function(request,response){
		waterpoints.all(request,response);
	})
}
