"use strict";

var fs        = require("fs");
var path      = require("path");
var Sequelize = require("sequelize");
var env       = process.env.NODE_ENV || "development";
var config    = require(path.join(__dirname, '..', 'config', 'config.json'))['env'];
// if (process.env.DATABASE_URL) {
//   var sequelize = new Sequelize(process.env.DATABASE_URL,config);
// } else {
//   var sequelize = new Sequelize(config.database, config.username, config.password, config);
// }
// var sequelize = new Sequelize('mysql://Weitzmam:i229rorY!@aa1o6qlyflb1dy1.ct0hnq2ct2gz.us-east-1.rds.amazonaws.com:3306/hacksqltest');
var sequelize = new Sequelize('mysql://root:root@localhost/hacksqltest');
var db        = {};

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf(".") !== 0) && (file !== "index.js");
  })
  .forEach(function(file) {
  
    var model = sequelize.import(path.join(__dirname, file));
    console.log(sequelize.import(path.join(__dirname, file)));
    // console.log(file)
    // console.log(model);
    db[model.name] = model;
  });

Object.keys(db).forEach(function(modelName) {
  if ("associate" in db[modelName]) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;