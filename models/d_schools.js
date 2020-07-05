'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class d_schools extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  d_schools.init({
    id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    town: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'd_schools',
  });
  return d_schools;
};