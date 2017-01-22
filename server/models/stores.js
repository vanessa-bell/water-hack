"use strict";

module.exports = function(sequelize, DataTypes) {
  var Store = sequelize.define("store", {
    storeName: DataTypes.STRING,
    storeLat: DataTypes.STRING,
    storeLong:DataTypes.STRING
  });

  return Store;
};
