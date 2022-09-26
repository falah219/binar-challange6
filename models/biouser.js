'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BioUser extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  BioUser.init({
    fullName: DataTypes.STRING,
    gender: DataTypes.STRING,
    age: DataTypes.INTEGER,
    UserDataId: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'BioUser',
  });
  return BioUser;
};