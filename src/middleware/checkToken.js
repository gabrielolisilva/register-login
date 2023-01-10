require("dotenv").config();
const jwt = require("jsonwebtoken");
const isLoggedin = require("../controllers/controllers");

const checkToken = (req, res, next) => {
  if (isLoggedin) {
    console.log(isLoggedin);
    next();
  } else {
    res.status(500).redirect("/register");
  }
};

module.exports = checkToken;
