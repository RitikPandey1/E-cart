const jwt = require("jsonwebtoken");
const User = require("../model/userModel");
const { promisify } = require("util");

const jwtSign = (payload) =>
  jwt.sign(payload, process.env.KEY, { expiresIn: process.env.jwtexpat });

const sendToken = (res, data) => {
  const token = jwtSign({ id: data._id });
  const cookieOptions = {
    expires: new Date(
      Date.now() + process.env.cookieexpat * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };

  if (process.env.NODE_ENV === "production") cookieOptions.secure = true;
  console.log(token);
  res.cookie("jwt", token, cookieOptions);
  res.status(201).json({ status: "Success" });
};

exports.signUp = async (req, res, next) => {
  const user = await User.create({
    ...req.body,
    date: Date.now(),
  });

  sendToken(res, user);
};

exports.login = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res
      .status(400)
      .json({ status: "Fail", message: "Please provide email and password" });

  const user = await User.findOne({ email }).select("+password");

  if (!user || !(await user.checkPassword(password, user.password)))
    return res
      .status(401)
      .json({ status: "Fail", message: "email or password incorrect" });

  sendToken(res, user);
};

exports.logout = (req, res, next) => {
  res.cookie("jwt", "logout", { httpOnly: true });
  res.status(200).json({ status: "logout" });
};

exports.protectFirewall = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  } else if (req.cookies) {
    token = req.cookies.jwt ? req.cookies.jwt : "";
  }
  if (!token)
    return res
      .status(401)
      .json({ status: "Fail", message: "Please login to get access" });
  let decode = await promisify(jwt.verify)(token, process.env.KEY);
  const user = await User.findById(decode.id).select("+password");
  if (!user)
    return res.status(404).json({
      status: "Fail",
      message: "account not found ,Please create your account",
    });
  req.user = user;
  next();
};

exports.updatePassword = async (req, res, next) => {
  const { currentPassword, newPassword, confirmPassword } = req.body;
  const user = await User.findById(req.user._id);
  console.log(currentPassword);
  console.log(req.user);
  if (!(await user.checkPassword(currentPassword, req.user.password)))
    return res
      .status(400)
      .json({ status: "Fail", message: "password not matched" });
  user.password = newPassword;
  user.confirmPassword = confirmPassword;
  await user.save();
  sendToken(res, user);
};
