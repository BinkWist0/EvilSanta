const router = require('express').Router();

const usersRouter = require('./api/users.routes');
const authRouter = require('./api/auth.routes');
const profileRouter = require('./api/profile.routes');

const rejectIfNotAuthorized = require('../middlewares/rejectIfNotAuthorized');

router.use('/api/auth', authRouter);
router.use('/api/users', usersRouter);

// router.use(rejectIfNotAuthorized); // защита роутов ниже от неаутентицированных пользователей

router.use('/api/profile', profileRouter);

module.exports = router;
