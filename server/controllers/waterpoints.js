// var mongoose = require('mongoose');
var sequelize = require('sequelize');
var models  = require('../models');
module.exports = {
  all: function(request, response) {
    console.log('in the all function')
    models.Waterpoint.findAll({}).then(function(waterpoints){
        // if(err){
        //   console.log(err)
        //   console.log(users[0])
        //   response.render('users',{all_users:users,errors:err})
        // }
        // else {
          console.log(users)
          response.render('users', {all_waterpoints:waterpoints,errors:'None'});
        // }
      })
  },
  create: function(request, response) 
    {
      models.Waterpoint.create({
      waterpoint_name: request.body.name,
      waterpoint_description: request.body.water_description,
      street: request.body.street_number,
      city: request.body.city,
      state: request.body.state,
      zip: request.body.zip,
      lat: request.body.latitude,
      long: request.body.longitude
      }).then(function() {
        response.redirect('/waterpoint/new');
      });
    }
  }

