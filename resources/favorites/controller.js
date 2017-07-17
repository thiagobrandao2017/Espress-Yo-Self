const request = require("request-promise")
const User = require("../../models/user");

let controller = {};

controller.create = (req,res) => {
  User.saveShop(req.session.user, req.body.shop)
  .then(()=> res.redirect(`/dashboard?location=${req.query.location}`));
};

controller.show = (req,res) => {
  User.showFavorites(req.session.user.id)
  .then((shops) => {
    res.render("favorites/show", {
      shops: shops,
    });
  })
  .catch(err => res.send(err));
}

controller.destroy = (req,res) => {
  User.deleteFavorite(req.session.user.id, req.body.shop.id)
  .then(() => res.redirect('/favorites'))
  .catch((err) => {
    res.send(err);
  });
};

module.exports = controller;
