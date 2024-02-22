const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('./config');

const authMiddleware = (req, res, next) => {
  const authHeader = req.header.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(403).json({});
  }

  const token = authHeader.splite(' ')[1];

  try {
    const decode = jwt.verify(token, JWT_SECRET);
    req.userId = decode.userId;
    next();
  } catch (error) {
    return res.status(403).json({});
  }
};

modules.export = {
  authMiddleware,
};
