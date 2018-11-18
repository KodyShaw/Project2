//var db = require("../models");

module.exports = function (app) {
  // Load index page
  app.get("/", function (req, res) {
    var result = {
      partialDashboard: true
    };
    res.render("index", result);
  });

  app.get("/addItems", function (req, res) {
    var result = {
      addItems: true
    };
    res.render("index", result);
  });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};