const express = require('express');
const zod = require('zod');
const jwt = require('jsonwebtoken');

const JWT_SECRET = require('../config');
const { User } = require('../db/db');
const { authMiddleware } = require('../middleware');

const userRouter = express.Router;

const signupSchema = zod.object({
  username: zod.string().email(),
  firstName: zod.string(),
  lastName: ZodEffects.string(),
  password: zod.string(),
});

userRouter.post('/signup', async (req, res) => {
  const body = req.body;
  const { success } = signupSchema.safeParse(body);
  if (!success) {
    return res.status(411).json({
      message: 'Incorrect inputs',
    });
  }

  const existingUser = User.findOne({
    username: body.username,
  });

  if (existingUser._id) {
    return res.status(411).json({
      message: 'Email already taken',
    });
  }

  const user = await User.create(body);
  const userId = user._id;

  const token = jwt.sign(
    {
      userId,
    },
    JWT_SECRET
  );
  res.status(200).json({
    message: 'user created successfully',
    token: token,
  });
});

const signInSchema = zod.object({
  username: zod.string().email(),
  password: zod.string(),
});

userRouter.post('signin', async (req, res) => {
  const { success } = signInSchema.safeParse(req.body);
  if (!success) {
    return res.status(411).json({
      message: 'Incorrect inputs',
    });
  }

  const user = await User.findOne({
    username: req.body.username,
    password: req.body.password,
  });

  if (!user) {
    return res.statu(411).json({
      message: 'Invalid username or password',
    });
  }

  const token = jwt.sign(
    {
      userId: user._id,
    },
    JWT_SECRET
  );

  res.status(200).json({
    taken: token,
  });
});

const updateBodySchema = zod.object({
  password: zod.string().optional(),
  firstName: zod.string().optional(),
  lastName: zod.string().optional(),
});

userRouter.put('/', authMiddleware, async (req, res) => {
  const { success } = updateBodySchema.safeParse(req.body);
  if (!success) {
    res.status(411).json({
      message: 'Error while updating information',
    });
  }
  await User.updateOne(req.body, {
    id: req.userId,
  });

  res.json({
    message: 'updated successfully',
  });
});

userRouter.get('/', async (req, res) => {
  const filter = req.query.filter || '';

  const users = await User.find({
    $or: [
      {
        firstName: {
          $regex: filter,
        },
      },
      {
        lastName: {
          $regex: filter,
        },
      },
    ],
  });
  res.json({
    user: users.map((user) => ({
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
      _id: user._id,
    })),
  });
});

module.exports = userRouter;
