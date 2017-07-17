const request = require("request-promise");
const User = require("../../models/user");

let controller = {};

controller.index = (req, res) => {
  if (Object.keys(req.query).length > 0) {
    //Make sure term is always coffee
    req.query.term = "coffee";
    req.query.limit = 40;
    req.query.sort = 2;

    request({
      method: "GET",
      uri: "https://api.yelp.com/v3/businesses/search",
      qs: req.query,
      headers: {
        "Authorization": `Bearer ${process.env.YELP_KEY}`
      }
    })
    .then((data) => {
      const jsonData = JSON.parse(data);
      // console.log(jsonData.businesses);
      res.render("dashboard/index", {
        shops: jsonData.businesses,
        location: req.query.location
      });
    })
    .catch(err => res.send(err));

  } else {
    res.render("dashboard/index",{
      shops:[]
    });
  }
};

module.exports = controller;
