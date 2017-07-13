const request = require("request-promise");

let controller = {};

controller.index = (req, res) => {
  if (Object.keys(req.query).length > 0) {
    //Make sure term is always coffee
    req.query.term = "coffee";

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
      res.render("dashboard/index", {
        shops: jsonData.businesses
      });
    });

  } else {
    res.render("dashboard/index");
  }
}

module.exports = controller;
