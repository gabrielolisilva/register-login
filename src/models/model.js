const mongoose = require("mongoose");

const registerSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: [true, "provide your name please"],
  },
  sobrenome: {
    type: String,
    required: [true, "provide your last name please"],
  },
  email: {
    type: String,
    required: [true, "provide your email please"],
  },
  password: {
    type: String,
    required: [true, "provide your password please"],
  },
});

module.exports = mongoose.model("Register", registerSchema);
