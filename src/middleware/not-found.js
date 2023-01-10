const notFound = (req, res) => {
  res.status(404).send("Route not founded");
};

module.exports = notFound;
