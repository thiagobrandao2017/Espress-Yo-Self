const express = require('express'),

router = express.Router();
  // router.use('/', require('./controllers/dashboard'));
  router.use('/users', require('./resources/users'));
  // router.use('/favorites', require('./controllers/favorites'));


module.exports = router;
