"use strict";
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    first_name:DataTypes.STRING,
  last_name:DataTypes.STRING,
  email:DataTypes.STRING,
  username: DataTypes.STRING,
  birthday: DataTypes.DATE,
  age: DataTypes.STRING
  })
   return User;
 };


