module.exports = (app) => {
  app.get(/^\/home\/?$/, (req, res) => {
    res.redirect(301, "/");
  });
};
