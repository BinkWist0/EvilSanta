'use strict';
const { User } = require('../models');
const bcrypt = require('bcrypt');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await User.bulkCreate([
      {
        name: 'Ваня',
        lastname: 'Голубев',
        email: 'i@i',
        password: await bcrypt.hash('123', 10),
        avatarId: 5,
        description: 'Люблю конфеты и мыло',
        isAdmin: false,
      },
      {
        name: 'Саша',
        lastname: 'Грибенченко',
        email: 'a@a',
        password: await bcrypt.hash('123', 10),
        avatarId: 9,
        description: 'Люблю шампуни и резинку',
        isAdmin: false,
      },
      {
        name: 'Илья',
        lastname: 'Ильин',
        email: 's@i',
        password: await bcrypt.hash('123', 10),
        avatarId: 4,
        description: 'Люблю сигареты и колу',
        isAdmin: false,
      },
      {
        name: 'Аня',
        lastname: 'Я не помню фамилию',
        email: 'aa@aa',
        password: await bcrypt.hash('123', 10),
        avatarId: 3,
        description: 'Люблю кидать в Толю тапками, нужны новые тапки....',
        isAdmin: true,
      },
      {
        name: 'Толя',
        lastname: 'Хз',
        email: 't@t',
        password: await bcrypt.hash('123', 10),
        avatarId: 7,
        description: 'Есть много тапок. Нужны кому-то?',
        isAdmin: false,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await User.destroy({ truncate: { cascade: true } });
  },
};
