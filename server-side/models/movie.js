'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Movie.belongsTo(models.Genre, { foreignKey: "genreId" })
      Movie.belongsTo(models.User, { foreignKey: "auhtorId" })
      Movie.hasMany(models.Cast, { foreignKey: "movieId" })
    }
  }
  Movie.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: "title is required" },
        notNull: { msg: "title is required" },
      }
    },
    slug: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: "slug is required" },
        notNull: { msg: "slug is required" },
      }
    },
    synopsis: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: { msg: "synopsis is required" },
        notNull: { msg: "synopsis is required" },
      }
    },
    trailerUrl: DataTypes.STRING,
    imgUrl: DataTypes.STRING,
    bannerUrl: DataTypes.STRING,
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: { msg: "rating is required" },
        notNull: { msg: "rating is required" },
        checkRating(x) {
          if (x < 1) {
            throw new Error("Rating minimal 1")
          }
        }
      }
    },
    genreId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: { msg: "Genre is required" },
        notNull: { msg: "Genre is required" },
      }
    },
    auhtorId: DataTypes.INTEGER,
    categoryId: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
    }
  }, {
    sequelize,
    modelName: 'Movie',
  });
  return Movie;
};