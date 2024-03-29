const mongoose = require("mongoose");
const validator = require("validator");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Invalud email");
      }
    },
  },
  message: {
    type: String,
    required: true,
    minLength: 3,
  },
});

const User = new mongoose.model("User", userSchema);

module.exports = User;
