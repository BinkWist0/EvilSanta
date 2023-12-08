'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Mathes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({User}) {
     this.belongsTo(User,{foreignKey:'userId2'})
    }
  }
  Mathes.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      userId2: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: 'Mathes',
    }
  );
  return Mathes;
};
