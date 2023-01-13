const loginRequested = (req, res, next) => {
  if (!req.session.usuario) {
    return res.redirect("/");
  }
  return next();
};

module.exports = loginRequested;
