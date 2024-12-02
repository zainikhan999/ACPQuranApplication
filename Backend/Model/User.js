const mongoose = require('mongoose');
// This schema is for signup user 
const UserSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
      trim: true,
      unique: true,

    },
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    contact: {
      type: String,
      required: true,
      trim: true,
      match: /^\d{10,15}$/, 
    },
  },
  { timestamps: true }    //to show user time when it filled the form
);

const User = mongoose.model('User', UserSchema);
module.exports = User;
