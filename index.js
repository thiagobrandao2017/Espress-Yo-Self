const express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  session = require('express-session'),
  methodOverride = require('method-override'),
  MongoStore = require('connect-mongo')(session),
  port = process.env.PORT || 5000;

require('dotenv').config();

app.set('view engine', 'ejs');

app.use(express.static('./public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride('_method'));

app.use(session({
  secret: process.env.SECRET_KEY,
  resave: false,
  isAuthorized: false,
  saveUninitialized: true,
  store: new MongoStore({
    url: process.env.MONGODB_URI || 'mongodb://localhost:27017/sessions',
  }),
}));

app.use(require('./resources'));

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
