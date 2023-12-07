'use strict';
const { Avatar } = require('../models');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await Avatar.bulkCreate([
      {
        url: '/avatars/год-дракона.png',
      },
      {
        url: '/avatars/конфета.png',
      },
      {
        url: '/avatars/новогодняя-елка.png',
      },
      {
        url: '/avatars/подарок.png',
      },
      {
        url: '/avatars/пряничный-человечек.png',
      },
      {
        url: '/avatars/рождественский-бал.png',
      },
      {
        url: '/avatars/санта.png',
      },
      {
        url: '/avatars/снеговик.png',
      },
      {
        url: '/avatars/снегурочка.jpg',
      },
      {
        url: '/avatars/фейерверк.png',
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
