const jwt = require("jsonwebtoken");
const User = require("../model/userModel");
const { promisify } = require("util");
const catchError = require("../utils/catchError");
const AppError = require("../utils/appError");

const jwtSign = (payload) =>
  jwt.sign(payload, process.env.KEY, { expiresIn: process.env.jwtexpat });

const sendToken = (res, data) => {
  const token = jwtSign({ id: data._id });
  const cookieOptions = {
    expires: new Date(
      Date.now() + process.env.cookieexpat * 24 * 60 * 60 * 1000
    ),
  };

  // if (process.env.NODE_ENV === "production") {
  //   cookieOptions.secure = true;
  //   cookieOptions.httpOnly = true;
  // }

  res.cookie("jwt", token, cookieOptions);
  res.status(201).json({ status: "Success" });
};


exports.getUser = catchError(async (req, res, next) => {
  const user = await User.findById(req.user._id).select(
		'-_id -createdAt -passwordChangedAt -__v'
	);
  res.status(200).json({ status: 'Success', data: user });
})

exports.updateUser = catchError(async (req, res, next) => {
  const { mobileNo, address, firstName, lastName, email, gender } = req.body;
  const user = await User.findById(req.user._id);
  user.mobileNo = mobileNo || user.mobileNo ;
  user.address = address || user.address;
  user.firstName = firstName || user.firstName ;
  user.lastName = lastName || user.lastName;
  user.email = email || user.email;
  await user.save({ validateBeforeSave: false });
  res.status(200).json({ status: 'Success', message: 'User updated' , data:user });
});

exports.signUp = catchError(async (req, res, next) => {
  const { firstName, lastName, email, password, confirmPassword } = req.body;
  const checkUser = await User.find({ email });
 
  if (checkUser.length) return next(new AppError("Fail", `User ${email} already exists`, 400));

  const user = await User.create({
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
  });

  sendToken(res, user);
});

exports.login = catchError(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password)
    return next(new AppError("Fail", "Please provide email and password", 400));
  const user = await User.findOne({ email }).select("+password");
  if (!user || !(await user.checkPassword(password, user.password)))
    return next(new AppError("Fail", "email or password incorrect", 401));
  sendToken(res, user);
});



exports.protectFirewall = catchError(async (req, res, next) => {
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
    return next(new AppError("Fail", "Please login to get access", 401));

  let decode = await promisify(jwt.verify)(token, process.env.KEY);
  const user = await User.findById(decode.id).select("+password");
  if (!user)
    return next(
      new AppError("Fail", "account not found ,Please create your account", 404)
    );
  if (user.checkPasswordUpdate(decode.iat))
    return next(
      new AppError("Fail", "password updated , please use new password", 400)
    );
  req.user = user;
  next();
});

exports.updatePassword = catchError(async (req, res, next) => {
  const { currentPassword, newPassword, confirmPassword } = req.body;
  const user = await User.findById(req.user._id);

  if (!(await user.checkPassword(currentPassword, req.user.password)))
    return next(new AppError("Fail", "password not matched", 400));

  user.password = newPassword;
  user.confirmPassword = confirmPassword;
  await user.save();
  sendToken(res, user);
});
