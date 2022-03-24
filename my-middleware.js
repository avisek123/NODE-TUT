module.exports = function (Option) {
  return function (req, res, next) {
    console.log("Middleware working");
    next();
  };
};
