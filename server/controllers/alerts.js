// var mongoose = require('mongoose');
var sequelize = require('sequelize');
var models  = require('../models');
module.exports = {
  all: function(request, response) {
    console.log('in the all function')
    // need to make a request to the weather service api
    var http = require("https");

    var options = {
      "method": "GET",
      "hostname": "api.weather.gov",
      "port": null,
      "path": "/alerts?active=1&points=25.8566,-80.12",
      "headers": {
        // "cache-control": "no-cache",
        // "postman-token": "548e6547-18b4-0f17-d2d9-05c3ad194af8",
        "User-Agent": "node-http/0.9.5"
      }
    };

    var req = http.request(options, function (res) {
      console.log(res);
      var chunks = [];

      res.on("data", function (chunk) {
        console.log(chunk);
        chunks.push(chunk);
      });

      res.on("end", function () {
        var body = Buffer.concat(chunks);
        console.log(body.toString());
        // response.json(body.toString());
      });
    });

    req.end();
  },
  create: function(request, response) {
   
  } 
}

// router.get('/', function(req, res) {
//   models.User.findAll({}).then(function(users) {
//     res.render('index', {
//       title: 'Sequelize: Express Example',
//       users: users
//     });
//   });
// });