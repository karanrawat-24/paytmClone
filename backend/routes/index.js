const express = require('express');
const userRouter = require('./user.js');

const mainRouter = express.Router;

mainRouter.use('/user', userRouter);

module.exports = mainRouter;
