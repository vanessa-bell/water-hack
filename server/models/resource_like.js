"use strict";
module.exports = function(sequelize, DataTypes) {
  var Resource_Has_Likes = sequelize.define("Resource_Has_Likes", {
  resource_id:DataTypes.INTEGER,
  uplike:DataTypes.INTEGER,
  downlike:DataTypes.INTEGER,
  user_ip_address:DataTypes.STRING,
  created_at: DataTypes.DATE,
  updated_at: DataTypes.DATE,
  })
   return Resource_Has_Likes;
 };


