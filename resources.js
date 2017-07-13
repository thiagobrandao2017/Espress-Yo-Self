const express = require('express'),

router = express.Router();
  router.use('/dashboard', require('./resources/dashboard'));
  router.use('/users', require('./resources/users'));
  //router.use('/favorites', require('./controllers/favorites'));


module.exports = router;
