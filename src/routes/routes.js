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
  postUsersForm,
} = require("../controllers/controllers");

const loginRequested = require("../middleware/loginRequested");

router.route("/").get(getRegisterPage);

router.route("/success").get(getSuccessPage);

router.route("/logout").get(getLogOutPage);

router.route("/login").get(getLoginPage);

router.route("/home").get(getHomePage);

router.route("/users").get(loginRequested, getUsersPage);

router.route("/").post(postRegisterForm);

router.route("/login").post(postLoginForm);

router.route("/users").post(postUsersForm);

module.exports = router;
