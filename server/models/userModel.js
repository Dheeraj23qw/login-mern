const mongoose = require("mongoose");

const userModelSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "please provide a unique username"],
      unique: [true, "Username exist"],
    },
    password: {
      type: String,
      required: [true, "please provide a password"],
    },
    email: {
      type: String,
      required: [true, "please provide a unique email"],
      unique: true,
    },

    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    mobile: {
      type: Number,
    },
    address: {
      type: String,
    },
    profile: {
      type: String,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userModelSchema);

module.exports = User;
