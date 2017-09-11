// var mongoose = require('mongoose');
var sequelize = require('sequelize');
var models  = require('../models');
module.exports = {
  all: function(request, response) {
  	var http = require("http");

var options = {
  "method": "GET",
  "hostname": "devapi.mygasfeed.com",
  "port": null,
  "path": "/stations/radius/42.9682357/-85.660556/5/reg/distance/rfej9napna.json",
  "headers": {
    "cache-control": "no-cache",
    "postman-token": "464797f3-2e18-041c-328d-12fcaeef947a"
  }
};

var req = http.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
    response.json(body.toString());
  });
});

req.end();
  }
}