module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "Error";
  
  if (process.env.NODE_ENV === "production") {
    if (err.statusCode === 500) {
      return res.status(err.statusCode).json({
        status: err.status,
        message: "Oops, sorry something went wrong !",
      });
    }

    res
      .status(err.statusCode)
      .json({ status: err.status, message: err.message });
  }

  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
    error: err.stack,
  });
};
