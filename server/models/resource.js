"use strict";
module.exports = function(sequelize, DataTypes) {
  var Resource = sequelize.define("Resource", {
  resource_name:DataTypes.STRING,
  resource_description:DataTypes.STRING,
  resource_type:DataTypes.INTEGER,
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
   return Resource;
 };


