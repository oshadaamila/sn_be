'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class grades extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  grades.init({
    grade_id: DataTypes.INTEGER,
    max_date: DataTypes.DATE,
    min_age: DataTypes.DATE,
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'grades',
  });
  return grades;
};