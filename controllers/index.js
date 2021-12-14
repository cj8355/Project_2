const router = require('express').Router();

const apiRoutes = require('./api');
const { Product } = require('../models');

const homeRoutes = require('./del');
const homeRoutes2 = require('./home-routes');
const dashboardRoutes = require('./dashboard-routes.js');
const aboutroutes = require('./aboutroutes');

//router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/', homeRoutes2);
router.use('/dashboard', dashboardRoutes);
router.use('/about', aboutroutes);

// router.use('/business', )

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});


module.exports = router;