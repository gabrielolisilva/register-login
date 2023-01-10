const { isLoggedIn } = require("../controllers/controllers");

const loginRequired = (req, res, next) => {
  if (isLoggedIn === false) {
    res.redirect("/");
    console.log(isLoggedIn);
    return;
  } else {
    console.log(isLoggedIn);
    next();
  }
};

module.exports = loginRequired;
