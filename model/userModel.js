const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "user name required"],
  },
  email: {
    type: String,
    required: [true, "Please provide email"],
    lowercase: true,
    unique: true,
    validate: [validator.isEmail, "Invalid email"],
  },
  password: {
    type: String,
    min: [8, "min password length is 8"],
    select: false,
    required: [true, "Please provide password"],
  },
  confirmPassword: {
    type: String,
    required: [true, "Please confirm your password"],
    validate: {
      validator: function (el) {
        return el == this.password;
      },
      message: "Confirm password is not same as password",
    },
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 12);
  this.confirmPassword = undefined;
  next();
});

userSchema.methods.checkPassword = async (givenPass, reqPass) =>
  await bcrypt.compare(givenPass, reqPass);

const User = new mongoose.model("User", userSchema);

module.exports = User;
