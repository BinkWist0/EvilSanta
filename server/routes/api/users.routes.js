const router = require("express").Router();

const { User } = require("../../db/models");
const { Avatar } = require("../../db/models");

router.get("/", async (req, res) => {
  try {
    const allUser = await User.findAll({ include: Avatar, raw: true });

    res.status(200).json(allUser);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
