const jwt = require('jsonwebtoken');
const generateTokens = require('../utils/authUtils');
const cookiesConfig = require('../config/cookiesConfig');

// логика проверки refresh token
function verifyRefreshToken(req, res, next) {
  // проверяем, если есть кука с refresh token
  const { refresh } = req.cookies;

  try {
    const { user } = jwt.verify(refresh, 'r');
    console.log(user, 'verify');
    // если верификация прошла успешно, то кладем user в res.locals (зачем он там нужен?)
    res.locals.user = user;

    // сгенерируем  новые jwt токены
    const { accessToken, refreshToken } = generateTokens({
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        lastname: user.lastname,
        avatarId: user.avatarId,
        isAdmin: user.isAdmin,
      },
    });

    // Возвращаем токены в httpOnly cookie при ответе
    // устанавливаем куки
    res.cookie(cookiesConfig.access.type, accessToken, {
      maxAge: 1000 * 60 * 5,
      httpOnly: true,
    });
    res.cookie(cookiesConfig.refresh.type, refreshToken, {
      maxAge: 1000 * 60 * 60 * 12,
      httpOnly: true,
    });

    // мы внутри мидлварки, поэтому отправляем запрос дальше
    next();
  } catch (error) {
    // сюда упали, если refresh кука была, но верификацию не прошла, значит - кука некорректная
    res.clearCookie(cookiesConfig.refresh.type);
    next();
  }
}

// логика проверки access token
function verifyAccessToken(req, res, next) {
  // проверяем, если есть кука с access token
  const { access } = req.cookies;

  const { user } = jwt.verify(access, 'a');
  // если верификация прошла успешно, то кладем user в res.locals
  res.locals.user = user;
  // и отправляем запрос дальше
  next();
}

function checkUser(req, res, next) {
  try {
    // проверка access token
    verifyAccessToken(req, res, next);
  } catch (error) {
    // если access нет или она некорректная, то упадёт сюда - следующий шаг проверка refresh
    res.clearCookie(cookiesConfig.access.type); //  на всякий случай чистим некорректную куку
    verifyRefreshToken(req, res, next);
  }
}

module.exports = checkUser;
