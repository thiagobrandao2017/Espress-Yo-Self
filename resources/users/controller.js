const bcrypt = require("bcrypt");
const User = require("../../models/user");

let controller = {};

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

    User.findByEmail(req.body.user.email)
    .then((user) => {
        if (user) {
            if (bcrypt.compareSync(req.body.user.password, user.password)) {
                //Password matches! Good to go.

                //Set user to session to be used throughout the site
                req.session.user = user;
                req.session.isAuthenticated = true;
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
    .then(() => {
        res.redirect("/users/login");
    })
    .catch((err) => {
        res.send(err);
    });
}

module.exports = controller;
