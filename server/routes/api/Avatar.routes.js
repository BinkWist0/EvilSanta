const router = require('express').Router();

const { Avatar } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const allAvatar = await Avatar.findAll({ raw: true });

    res.status(200).json(allAvatar);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
