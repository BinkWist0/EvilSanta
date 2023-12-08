'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Avatar,Mathes }) {
      this.belongsTo(Avatar, { foreignKey: 'avatarId' });
      this.hasMany(Mathes,{foreignKey:'userId2'})
    }
  }
  User.init(
    {
      name: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      lastname: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      email: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      password: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      avatarId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Avatars',
          key: 'Id',
        },
        onDelete: 'cascade',
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      isAdmin: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    },
    {
      sequelize,
      modelName: 'User',
    }
  );
  return User;
};
