"use strict";
module.exports = function(sequelize, DataTypes) {
  var Waterpoint = sequelize.define("Waterpoint", {
  waterpoint_name:DataTypes.STRING,
  waterpoint_description:DataTypes.STRING,
  street:DataTypes.STRING,
  street_2: DataTypes.STRING,
  city: DataTypes.STRING,
  state: DataTypes.STRING,
  zip: DataTypes.STRING,
  lat: DataTypes.STRING,
  long: DataTypes.STRING,
  created_at: DataTypes.DATE,
  updated_at: DataTypes.DATE,
  })
   return Waterpoint;
 };


