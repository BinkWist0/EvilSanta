const router = require('express').Router();

const { User } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const allUser = await User.findAll();
    res.status(200).json(allUser);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
