const router = require('express').Router();
<<<<<<< HEAD
const apiRoutes = require('./api');
const { Product } = require('../models');

const homeRoutes = require('./homeRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

// router.use('/business', )

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});


module.exports = router;
=======

const apiRoutes = require('./api/');
const homeRoutes = require('./home-routes.js');
const dashboardRoutes = require('./dashboard-routes.js');

router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/api', apiRoutes);

module.exports = router;
>>>>>>> main
