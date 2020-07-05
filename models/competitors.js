'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class competitors extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  competitors.init({
    competition_id: DataTypes.INTEGER,
    d_school_id: DataTypes.INTEGER,
    entered_by: DataTypes.INTEGER,
    grade_id: DataTypes.INTEGER,
    id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    place: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'competitors',
  });
  return competitors;
};