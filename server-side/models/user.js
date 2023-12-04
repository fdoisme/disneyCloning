'use strict';
const bcrypt = require("bcrypt")

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Movie, { foreignKey: "auhtorId" })
    }
  }
  User.init({
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: { msg: "username has been taken" },
      validate: {
        notEmpty: { msg: "username is required" },
        notNull: { msg: "username is required" },
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: { msg: "email has been registered" },
      validate: {
        notEmpty: { msg: "email is required" },
        notNull: { msg: "email is required" },
        isEmail: { msg: "invalid format email" }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: "password is required" },
        notNull: { msg: "password is required" },
        checkLengthPass(x) {
          // console.log(x, x.length, ":::::");
          if (x.length < 5) {
            throw new Error("Password minimal 5 karakter")
          }
        }
      }
    },
    role: {
      type: DataTypes.STRING,
      defaultValue: "admin",
      allowNull: false,
    },
    phoneNumber: DataTypes.STRING,
    address: DataTypes.STRING
  }, {
    hooks: {
      beforeCreate: (user) => {
        user.password = bcrypt.hashSync(user.password, 10)
      }
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};