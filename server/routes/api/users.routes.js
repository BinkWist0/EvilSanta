const router = require('express').Router();


const { User } = require('../../db/models');
const { Avatar, Mathes } = require('../../db/models');
const mathes = require('../../db/models/mathes');


router.get('/', async (req, res) => {
  try {
    const allUser = await User.findAll({
      include: Avatar,
      raw: true,
      where: { isAdmin: false },
    });

    res.status(200).json(allUser);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post('/randomize', async (req, res) => {
  try {
    const users = await User.findAll();
    const sortedUsers = [...users].sort(() => Math.random() - 0.5);

    const recipient = sortedUsers.map((user, i) => {
      const nextIndex = (i + 1) % sortedUsers.length;
      return { userId: user.id, userId2: sortedUsers[nextIndex].id };
    });

    await Mathes.destroy({ where: {} });
    
    await Mathes.bulkCreate(recipient);

    res.status(200).json({ recipient });
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
});

module.exports = router;
