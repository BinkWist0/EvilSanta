const router = require("express").Router();

const { User } = require("../../db/models");
const { Avatar, Mathes } = require("../../db/models");

router.get("/", async (req, res) => {
  try {
    const allUser = await User.findAll({ include: Avatar, raw: true });

    res.status(200).json(allUser);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/", async (req, res) => {
  try {
    const [...arr] = req.body;

    arr.forEach(async (math) => {
      await Mathes.create({
        userId: math.userId,
        userId2: math.mathes,
      });
    });
    const users = await Mathes.findAll({ include: User });

    console.log(users);

    res.status(200).json();
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

module.exports = router;
