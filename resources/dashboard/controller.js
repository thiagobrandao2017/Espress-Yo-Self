const bcrypt = require("bcrypt");

let controller = {};

controller.index = (req, res) => {
  res.render("dashboard/index");
}

module.exports = controller;
