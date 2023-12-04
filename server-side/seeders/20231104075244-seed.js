'use strict';
const fs = require("fs")
const bcrypt = require("bcrypt")

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const seedUser = JSON.parse(fs.readFileSync("./datas/user.json", "utf-8")).map((el) => {
      el.createdAt = el.updatedAt = new Date();
      el.password = bcrypt.hashSync(el.password, 10)
      return el
    })
    const seedMovie = JSON.parse(fs.readFileSync("./datas/movies.json", "utf-8")).map((el) => {
      el.createdAt = el.updatedAt = new Date();
      return el
    })
    const seedGenre = JSON.parse(fs.readFileSync("./datas/genres.json", "utf-8")).map((el) => {
      el.createdAt = el.updatedAt = new Date();
      return el
    })
    const seedCast = JSON.parse(fs.readFileSync("./datas/casts.json", "utf-8")).map((el) => {
      el.createdAt = el.updatedAt = new Date();
      return el
    })
    await queryInterface.bulkInsert("Users", seedUser)
    await queryInterface.bulkInsert("Genres", seedGenre)
    await queryInterface.bulkInsert("Movies", seedMovie)
    await queryInterface.bulkInsert("Casts", seedCast)
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Casts", null, {})
    await queryInterface.bulkDelete("Movies", null, {})
    await queryInterface.bulkDelete("Users", null, {})
    await queryInterface.bulkDelete("Genres", null, {})
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
