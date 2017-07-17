const express = require("express");
const router = express.Router();

const controller = require("./controller");

router.route("/delete")
  .delete(controller.destroy);

router.route("/")
  .post(controller.create)
  .get(controller.show);

module.exports = router;
