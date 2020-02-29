'use strict';
module.exports = (sequelize, DataTypes) => {
  const Deliveries = sequelize.define('Deliveries', {
    address: DataTypes.STRING,
    time: DataTypes.STRING,
    fragile: DataTypes.BOOLEAN
  }, {});
  Deliveries.associate = function(models) {
    // associations can be defined here
  };
  return Deliveries;
};