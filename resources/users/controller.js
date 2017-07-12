const bcrypt = require("bcrypt");
const User = require("../../models/user");

let controller = {};

controller.index = (req, res) => {}

controller.show = (req, res) => {}

controller.sign_up = (req, res) => {
    res.render("users/new");
}

controller.login = (req, res) => {
    res.render("users/login");
}

controller.process_login = (req, res) => {
    //Step 1: User enters email and password
    //Step 2: Retrieve user from DB based on email address
    //Step 3: Compare user-entered password with DB password

    User.findByEmail(req.body.email)
    .then((user) => {
        if (user) {
            if (bcrypt.compareSync(req.body.password, user.password)) {
                //Password matches! Good to go.

                //Set user to session to be used throughout the site
                req.session.user = user;

                //Redirect to protected page only for logged in users
                res.redirect("/dashboard");
            } else {
                //Password does not match :(
                res.redirect("/users/login");
            }
        } else {
            res.redirect("/users/login");
        }
    })
    .catch((err) => {
        res.send(err);
    });
}

controller.create = (req, res) => {
    User.create(req.body.user)
    .then((user) => {
        res.send(user);
    })
    .catch((err) => {
        res.send(err);
    });
}

controller.update = (req, res) => {}

controller.destroy = (req, res) => {}


module.exports = controller;
