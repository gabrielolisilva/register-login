const express = require("express");
const router = express.Router();

const {
  getRegisterPage,
  getSuccessPage,
  getLoginPage,
  getHomePage,
  getUsersPage,
  postRegisterForm,
  postLoginForm,
} = require("../controllers/controllers");

const checkToken = require("../middleware/checkToken");

router.route("/").get(getRegisterPage);

router.route("/success").get(getSuccessPage);

router.route("/login").get(getLoginPage);

router.route("/home").get(getHomePage);

router.route("/users").get(getUsersPage);

router.route("/").post(postRegisterForm);

router.route("/login").post(postLoginForm);

module.exports = router;
