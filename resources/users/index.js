const express = require("express");
const router = express.Router();

const controller = require("./controller");

router.route("/")
    .post(controller.create);

router.route("/new")
    .get(controller.sign_up);

router.route("/login")
    .get(controller.login)
    .post(controller.process_login);

module.exports = router;
