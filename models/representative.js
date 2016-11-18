'use strict';
module.exports = function(sequelize, DataTypes) {
  var Representatives = sequelize.define('Representatives', {
    name: DataTypes.STRING,
    party: DataTypes.STRING,
    districtNum: DataTypes.INTEGER,
    phoneNum: DataTypes.STRING,
    url: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Representatives;
};