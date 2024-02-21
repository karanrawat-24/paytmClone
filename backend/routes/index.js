const express = require('express');
const UserRouter = require('./userRouter');
const mainRoute = express.Router;
const app = express();

app.use('/user', UserRouter);

module.exports = mainRoute;
