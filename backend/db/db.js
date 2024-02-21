const mongoose = require('mongoose');

mongoose.connect(
  'mongodb+srv://karan:karanrawat@cluster0.dbqylsj.mongodb.net/paytmDb'
);

const UserSchema = new mongoose.Schema({
  username: String,
  firstName: String,
  lastName: String,
  password: String,
});

const User = mongoose.model('User', UserSchema);

module.exports = {
  User,
};
