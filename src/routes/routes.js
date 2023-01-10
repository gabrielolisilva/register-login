const express = require("express");
const router = express.Router();

const {
  getRegisterPage,
  getSuccessPage,
  getLogOutPage,
  getLoginPage,
  getHomePage,
  getUsersPage,
  postRegisterForm,
  postLoginForm,
} = require("../controllers/controllers");

const loginRequired = require("../middleware/loginRequired");

router.route("/").get(getRegisterPage);

router.route("/success").get(getSuccessPage);

router.route("/logout").get(getLogOutPage);

router.route("/login").get(getLoginPage);

router.route("/home").get(getHomePage);

router.route("/users").get(loginRequired, getUsersPage);

router.route("/").post(postRegisterForm);

router.route("/login").post(postLoginForm);

module.exports = router;
