const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
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
});

module.exports = mongoose.model("Contact", contactSchema);
