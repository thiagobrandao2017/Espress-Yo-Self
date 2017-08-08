const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const session = require('express-session');
const methodOverride = require('method-override');
const MongoStore = require('connect-mongo')(session);
const port = process.env.PORT || 5000;

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


app.get('/', (req, res) => {
  res.redirect('/users/new');
});

app.use(require('./resources'));


app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
