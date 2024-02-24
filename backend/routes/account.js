const express = require('express');
const { authMiddleware } = require('../middleware');
const { Account } = require('../db/db');
const { default: mongoose } = require('mongoose');
const router = express.Router();

router.get('/balance', authMiddleware, async (req, res) => {
  const account = await Account.findOne({
    userId: req.userId,
  });

  res.status(200).json({
    balance: account.balance,
  });
});

router.post('/transfer', authMiddleware, async (req, res) => {
  const session = await mongoose.startSession();

  session.startTransaction();

  const { amount, to } = req.body;
  const account = await Account.findOne({
    userId: req.userId,
  });

  if (!account || account.balance < amount) {
    await session.abortTransaction();
    return res.status(400).json({
      message: 'Insufficient balance',
    });
  }

  const toAccount = await Account.findOne({
    userId: to,
  });

  if (!toAccount) {
    await session.abortTransaction();
    return res.status(400).json({
      message: 'Invaild account',
    });
  }

  await Account.updateOne(
    { userId: req.userId },
    { $inc: { balance: -amount } }
  );
  await Account.updateOne({ userId: to }, { $inc: { balance: amount } });

  await session.commitTransaction();

  res.status(200).json({
    message: 'transfer successful',
  });
});

module.exports = router;
