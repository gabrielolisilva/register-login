const Register = require("../models/model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const path = require("path");

const getRegisterPage = (req, res) => {
  res
    .status(200)
    .sendFile(path.join(__dirname, "../.././public/register.html"));
};

const getSuccessPage = (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "../.././public/success.html"));
};

const getLoginPage = (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "../.././public/login.html"));
};

const getHomePage = (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "../.././public/home.html"));
};

const getUsersPage = (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "../.././public/users.html"));
};

const postRegisterForm = async (req, res) => {
  const { nome, sobrenome, email, password } = req.body;
  if (!nome) {
    return res.status(422).json({ msg: "O nome é obrigatório" });
  }

  if (!sobrenome) {
    return res.status(422).json({ msg: "O sobrenome é obrigatório" });
  }

  if (!email) {
    return res.status(422).json({ msg: "O email é obrigatório" });
  }

  if (!password) {
    return res.status(422).json({ msg: "A senha é obrigatório" });
  }

  const alreadyExists = await Register.findOne({ email: email });

  if (alreadyExists) {
    return res.status(422).json({ msg: "Um usuário com esse email já existe" });
  }

  const salt = await bcrypt.genSalt(12);
  const passwordHash = await bcrypt.hash(password, salt);

  const user = new Register({
    nome,
    sobrenome,
    email,
    password: passwordHash,
  });

  try {
    await user.save();
    res.status(201).redirect("/success");
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const postLoginForm = async (req, res) => {
  const { email, password } = req.body;

  if (!email) {
    return res.status(422).json({ msg: "O email é obrigatório" });
  }

  if (!password) {
    return res.status(422).json({ msg: "A senha é obrigatório" });
  }

  const user = await Register.findOne({ email: email });

  if (!user) {
    return res.status(404).json({ msg: "Usuário não encontrado" });
  }

  const checkPassword = await bcrypt.compare(password, user.password);

  if (!checkPassword) {
    return res.status(404).json({ msg: "Senha Inválida" });
  }

  try {
    if (email === user.email && checkPassword) {
      res.status(201).redirect("/home");
    }
  } catch (error) {
    res.status(500).send("Usuário inválido");
  }

  /*if (email === user.email && checkPassword) {
    res.status(201).redirect("/home");
  } else {
    res.status(500).send("Usuário inválido");
  } */
};

module.exports = {
  getRegisterPage,
  getSuccessPage,
  getLoginPage,
  getHomePage,
  getUsersPage,
  postRegisterForm,
  postLoginForm,
};
